import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { ReviewStatus } from '@prisma/client';

@Injectable()
export class TestimoniesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new testimony (public). Status is always PENDING until admin approves.
   */
  async create(createTestimonyDto: CreateTestimonyDto) {
    try {
      const testimony = await this.prisma.testimony.create({
        data: {
          title: createTestimonyDto.title.trim(),
          content: createTestimonyDto.content.trim(),
          authorName: createTestimonyDto.authorName.trim(),
          authorEmail: createTestimonyDto.authorEmail.trim().toLowerCase(),
          status: ReviewStatus.PENDING,
        },
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

  async findAll() {
    try {
      return this.prisma.testimony.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch testimonies. Please try again later.',
      );
    }
  }

  async findAllApproved() {
    try {
      return this.prisma.testimony.findMany({
        where: { status: ReviewStatus.APPROVED },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch approved testimonies. Please try again later.',
      );
    }
  }

  async findAllRejected() {
    try {
      return this.prisma.testimony.findMany({
        where: { status: ReviewStatus.REJECTED },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch rejected testimonies. Please try again later.',
      );
    }
  }

  async findAllPending() {
    try {
      return this.prisma.testimony.findMany({
        where: { status: ReviewStatus.PENDING },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch pending testimonies. Please try again later.',
      );
    }
  }

  async findOne(id: number) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id },
    });
    if (!testimony) {
      throw new NotFoundException(`Testimony with id ${id} not found.`);
    }
    return testimony;
  }

  async update(id: number, updateTestimonyDto: UpdateTestimonyDto, adminEmail?: string) {
    await this.findOne(id);
    try {
      return this.prisma.testimony.update({
        where: { id },
        data: {
          ...(updateTestimonyDto.status && { status: updateTestimonyDto.status as ReviewStatus }),
          ...(adminEmail && { updatedByEmail: adminEmail }),
        },
      });
    } catch (error: unknown) {
      if (error instanceof NotFoundException) throw error;
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
}
