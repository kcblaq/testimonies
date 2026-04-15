import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { TestimoniesService } from '../testimonies/testimonies.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from '../admin/jwt-auth.guard';
import { AdminGuard } from '../admin/admin.guard';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly testimoniesService: TestimoniesService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List all categories', description: 'Public. Returns categories with testimony count.' })
  @ApiResponse({ status: 200, description: 'List of categories.' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':idOrSlug/testimonies')
  @ApiOperation({
    summary: 'List testimonies in this category',
    description: 'Returns all testimonies (any status) for the category. Use category ID or slug (e.g. healing).',
  })
  @ApiResponse({ status: 200, description: 'List of testimonies in the category.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  async getCategoryTestimonies(@Param('idOrSlug') idOrSlug: string) {
    const categoryId = await this.resolveCategoryId(idOrSlug);
    return this.testimoniesService.findAll(categoryId);
  }

  @Get(':idOrSlug/testimonies/approved')
  @ApiOperation({
    summary: 'List approved testimonies in this category',
    description: 'Returns only approved testimonies for the category.',
  })
  @ApiResponse({ status: 200, description: 'List of approved testimonies.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  async getCategoryTestimoniesApproved(@Param('idOrSlug') idOrSlug: string) {
    const categoryId = await this.resolveCategoryId(idOrSlug);
    return this.testimoniesService.findAllApproved(categoryId);
  }

  @Get(':idOrSlug/testimonies/rejected')
  @ApiOperation({ summary: 'List rejected testimonies in this category' })
  @ApiResponse({ status: 200, description: 'List of rejected testimonies.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  async getCategoryTestimoniesRejected(@Param('idOrSlug') idOrSlug: string) {
    const categoryId = await this.resolveCategoryId(idOrSlug);
    return this.testimoniesService.findAllRejected(categoryId);
  }

  @Get(':idOrSlug/testimonies/pending')
  @ApiOperation({ summary: 'List pending testimonies in this category' })
  @ApiResponse({ status: 200, description: 'List of pending testimonies.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  async getCategoryTestimoniesPending(@Param('idOrSlug') idOrSlug: string) {
    const categoryId = await this.resolveCategoryId(idOrSlug);
    return this.testimoniesService.findAllPending(categoryId);
  }

  @Get(':idOrSlug')
  @ApiOperation({ summary: 'Get category by ID or slug' })
  @ApiResponse({ status: 200, description: 'The category.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  findOne(@Param('idOrSlug') idOrSlug: string) {
    const num = parseInt(idOrSlug, 10);
    if (!Number.isNaN(num)) {
      return this.categoriesService.findOne(num);
    }
    return this.categoriesService.findBySlug(idOrSlug);
  }

  private async resolveCategoryId(idOrSlug: string): Promise<number> {
    const num = parseInt(idOrSlug, 10);
    if (!Number.isNaN(num)) {
      const category = await this.categoriesService.findOne(num);
      return category.id;
    }
    const category = await this.categoriesService.findBySlug(idOrSlug);
    return category.id;
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create category (admin only)' })
  @ApiResponse({ status: 201, description: 'Category created.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  @ApiResponse({ status: 409, description: 'Name or slug already exists.' })
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(dto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update category (admin only)' })
  @ApiResponse({ status: 200, description: 'Category updated.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @ApiResponse({ status: 409, description: 'Name or slug already exists.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCategoryDto) {
    return this.categoriesService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete category (admin only). Testimonies in this category will have categoryId set to null.' })
  @ApiResponse({ status: 204, description: 'Category deleted.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.categoriesService.remove(id);
  }
}
