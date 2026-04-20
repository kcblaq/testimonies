import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { TestimonyQueryDto } from './dto/testimony-query.dto';
import { ReviewStatus } from '@prisma/client';

@Injectable()
export class TestimoniesService {
  constructor(private readonly prisma: PrismaService) {}

  private includeCategory = { category: { select: { id: true, name: true, slug: true } } };

  /** Resolve categorySlug to category id. Throws if slug not found. */
  async resolveCategoryId(categoryId?: number, categorySlug?: string): Promise<number | undefined> {
    if (categorySlug != null && categorySlug.trim() !== '') {
      const category = await this.prisma.category.findUnique({
        where: { slug: categorySlug.trim().toLowerCase() },
      });
      if (!category) {
        throw new NotFoundException(`Category with slug "${categorySlug}" not found.`);
      }
      return category.id;
    }
    return categoryId;
  }

  /**
   * Create a new testimony (public). Status is always PENDING until admin approves.
   */
  async create(createTestimonyDto: CreateTestimonyDto) {
    if (createTestimonyDto.categoryId != null) {
      const category = await this.prisma.category.findUnique({
        where: { id: createTestimonyDto.categoryId },
      });
      if (!category) {
        throw new BadRequestException(`Category with id ${createTestimonyDto.categoryId} not found.`);
      }
    }
    try {
      const testimony = await this.prisma.testimony.create({
        data: {
          title: createTestimonyDto.title.trim(),
          content: createTestimonyDto.content.trim(),
          authorName: createTestimonyDto.authorName.trim(),
          authorEmail: createTestimonyDto.authorEmail.trim().toLowerCase(),
          status: ReviewStatus.PENDING,
          categoryId: createTestimonyDto.categoryId ?? undefined,
        },
        include: this.includeCategory,
      });
      return testimony;
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'code' in error) {
        const code = (error as { code?: string }).code;
        if (code === 'P2002') {
          throw new BadRequestException(
            'A testimony with this combination already exists or the request was duplicated.',
          );
        }
        if (code === 'P2003') {
          throw new BadRequestException('Invalid reference in the provided data.');
        }
      }
      throw new InternalServerErrorException(
        'Failed to create testimony. Please try again later.',
      );
    }
  }

  private buildWhereClause(query: TestimonyQueryDto, status?: ReviewStatus, resolvedCategoryId?: number) {
    const where: any = {};
    if (status) {
      where.status = status;
    }
    if (resolvedCategoryId != null) {
      where.categoryId = resolvedCategoryId;
    }
    if (query.search) {
      const searchMode = { contains: query.search, mode: 'insensitive' };
      where.OR = [
        { title: searchMode },
        { content: searchMode },
        { authorName: searchMode },
        { category: { name: searchMode } },
      ];
    }
    return where;
  }

  private async paginate(where: any, query: TestimonyQueryDto) {
    const page = query.page && query.page > 0 ? query.page : 1;
    const limit = query.limit && query.limit > 0 ? query.limit : 10;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.testimony.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: this.includeCategory,
      }),
      this.prisma.testimony.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findAll(query: TestimonyQueryDto, categoryId?: number) {
    try {
      const where = this.buildWhereClause(query, undefined, categoryId);
      return await this.paginate(where, query);
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch testimonies. Please try again later.',
      );
    }
  }

  async findAllApproved(query: TestimonyQueryDto, categoryId?: number) {
    try {
      const where = this.buildWhereClause(query, ReviewStatus.APPROVED, categoryId);
      return await this.paginate(where, query);
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch approved testimonies. Please try again later.',
      );
    }
  }

  async findAllRejected(query: TestimonyQueryDto, categoryId?: number) {
    try {
      const where = this.buildWhereClause(query, ReviewStatus.REJECTED, categoryId);
      return await this.paginate(where, query);
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch rejected testimonies. Please try again later.',
      );
    }
  }

  async findAllPending(query: TestimonyQueryDto, categoryId?: number) {
    try {
      const where = this.buildWhereClause(query, ReviewStatus.PENDING, categoryId);
      return await this.paginate(where, query);
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch pending testimonies. Please try again later.',
      );
    }
  }

  async findOne(id: number) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id },
      include: this.includeCategory,
    });
    if (!testimony) {
      throw new NotFoundException(`Testimony with id ${id} not found.`);
    }
    return testimony;
  }

  async update(id: number, updateTestimonyDto: UpdateTestimonyDto, adminEmail?: string) {
    await this.findOne(id);
    if (updateTestimonyDto.categoryId != null) {
      const category = await this.prisma.category.findUnique({
        where: { id: updateTestimonyDto.categoryId },
      });
      if (!category) {
        throw new BadRequestException(`Category with id ${updateTestimonyDto.categoryId} not found.`);
      }
    }
    try {
      return this.prisma.testimony.update({
        where: { id },
        data: {
          ...(updateTestimonyDto.status && { status: updateTestimonyDto.status as ReviewStatus }),
          ...(adminEmail && { updatedByEmail: adminEmail }),
          ...(updateTestimonyDto.categoryId !== undefined && {
            categoryId: updateTestimonyDto.categoryId ?? null,
          }),
        },
        include: this.includeCategory,
      });
    } catch (error: unknown) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(
        'Failed to update testimony. Please try again later.',
      );
    }
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    try {
      await this.prisma.testimony.delete({ where: { id } });
    } catch (error: unknown) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(
        'Failed to delete testimony. Please try again later.',
      );
    }
  }

  async approveMany(ids: number[]) {
    try {
      await this.prisma.testimony.updateMany({
        where: { id: { in: ids } },
        data: { status: ReviewStatus.APPROVED },
      });
    } catch (error: unknown) {
      throw new InternalServerErrorException('Failed to approve testimonies. Please try again later.');
    }
    return { message: 'Testimonies approved successfully' };
  }

  async rejectMany(ids: number[]) {
    try {
      await this.prisma.testimony.updateMany({
        where: { id: { in: ids } },
        data: { status: ReviewStatus.REJECTED },
      });
    } catch (error: unknown) {
      throw new InternalServerErrorException('Failed to reject testimonies. Please try again later.');
    }
  return { message: 'Testimonies rejected successfully' };
  }

  async deleteMany(ids: number[]) {
    try {
      await this.prisma.testimony.deleteMany({
        where: { id: { in: ids } },
      });
    } catch (error: unknown) {
      throw new InternalServerErrorException('Failed to delete testimonies. Please try again later.');
    }
    return { message: 'Testimonies deleted successfully' };
  }

  async deleteAll() {
    try {
      await this.prisma.testimony.deleteMany();
    } catch (error: unknown) {
      throw new InternalServerErrorException('Failed to delete all testimonies. Please try again later.');
    }
    return { message: 'All testimonies deleted successfully' };
  }
}
