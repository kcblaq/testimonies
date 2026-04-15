import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

function toSlug(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      return this.prisma.category.findMany({
        orderBy: { name: 'asc' },
        include: { _count: { select: { testimonies: true } } },
      });
    } catch {
      throw new InternalServerErrorException('Failed to fetch categories.');
    }
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { testimonies: true } } },
    });
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found.`);
    }
    return category;
  }

  async findBySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug: slug.trim().toLowerCase() },
      include: { _count: { select: { testimonies: true } } },
    });
    if (!category) {
      throw new NotFoundException(`Category with slug "${slug}" not found.`);
    }
    return category;
  }

  async create(dto: CreateCategoryDto) {
    const slug = dto.slug?.trim() || toSlug(dto.name);
    const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '-');
    try {
      const existing = await this.prisma.category.findFirst({
        where: {
          OR: [
            { name: { equals: dto.name.trim(), mode: 'insensitive' } },
            { slug: normalizedSlug },
          ],
        },
      });
      if (existing) {
        throw new ConflictException(
          existing.name.toLowerCase() === dto.name.trim().toLowerCase()
            ? 'A category with this name already exists.'
            : 'A category with this slug already exists.',
        );
      }
      return this.prisma.category.create({
        data: {
          name: dto.name.trim(),
          slug: normalizedSlug,
          description: dto.description?.trim() || null,
        },
      });
    } catch (error: unknown) {
      if (error instanceof ConflictException) throw error;
      if (error && typeof error === 'object' && 'code' in error) {
        const code = (error as { code?: string }).code;
        if (code === 'P2002') {
          throw new ConflictException('A category with this name or slug already exists.');
        }
      }
      throw new InternalServerErrorException('Failed to create category.');
    }
  }

  async update(id: number, dto: UpdateCategoryDto) {
    await this.findOne(id);
    const slug = dto.slug?.trim() || (dto.name ? toSlug(dto.name) : undefined);
    const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, '-');
    try {
      return this.prisma.category.update({
        where: { id },
        data: {
          ...(dto.name && { name: dto.name.trim() }),
          ...(normalizedSlug && { slug: normalizedSlug }),
          ...(dto.description !== undefined && { description: dto.description?.trim() || null }),
        },
      });
    } catch (error: unknown) {
      if (error instanceof NotFoundException) throw error;
      if (error && typeof error === 'object' && 'code' in error) {
        const code = (error as { code?: string }).code;
        if (code === 'P2002') {
          throw new ConflictException('A category with this name or slug already exists.');
        }
      }
      throw new InternalServerErrorException('Failed to update category.');
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      await this.prisma.category.delete({ where: { id } });
    } catch (error: unknown) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete category.');
    }
  }
}
