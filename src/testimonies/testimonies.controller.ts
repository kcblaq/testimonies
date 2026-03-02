import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { AdminGuard } from '../admin/admin.guard';
import { JwtAuthGuard } from '../admin/jwt-auth.guard';

@ApiTags('testimonies')
@Controller('testimonies')
export class TestimoniesController {
  constructor(private readonly testimoniesService: TestimoniesService) {}

  @Post()
  @ApiOperation({
    summary: 'Submit a testimony',
    description:
      'Public endpoint. Anyone can submit a testimony. It will be created with status PENDING until an admin approves it.',
  })
  @ApiResponse({ status: 201, description: 'Testimony submitted successfully.' })
  @ApiResponse({ status: 400, description: 'Validation failed or invalid request.' })
  @ApiResponse({ status: 500, description: 'Server error while creating testimony.' })
  create(@Body() createTestimonyDto: CreateTestimonyDto) {
    return this.testimoniesService.create(createTestimonyDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all testimonies' })
  @ApiResponse({ status: 200, description: 'List of testimonies.' })
  findAll() {
    return this.testimoniesService.findAll();
  }

  @Get('approved')
  @ApiOperation({
    summary: 'List approved testimonies',
    description: 'Returns only testimonies that have been approved by an admin. Public endpoint.',
  })
  @ApiResponse({ status: 200, description: 'List of approved testimonies.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  findAllApproved() {
    return this.testimoniesService.findAllApproved();
  }

  @Get('rejected')
  @ApiOperation({
    summary: 'List rejected testimonies',
    description: 'Returns only testimonies that have been rejected by an admin.',
  })
  @ApiResponse({ status: 200, description: 'List of rejected testimonies.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  findAllRejected() {
    return this.testimoniesService.findAllRejected();
  }

  @Get('pending')
  @ApiOperation({
    summary: 'List pending testimonies',
    description: 'Returns only testimonies awaiting admin review (status PENDING).',
  })
  @ApiResponse({ status: 200, description: 'List of pending testimonies.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  findAllPending() {
    return this.testimoniesService.findAllPending();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a testimony by ID' })
  @ApiResponse({ status: 200, description: 'The testimony.' })
  @ApiResponse({ status: 404, description: 'Testimony not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.testimoniesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Approve or reject a testimony (admin only)',
    description: 'Requires admin authentication. Set status to APPROVED or REJECTED.',
  })
  @ApiResponse({ status: 200, description: 'Testimony updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Not an admin.' })
  @ApiResponse({ status: 404, description: 'Testimony not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTestimonyDto: UpdateTestimonyDto,
    @Req() req: { user: { email: string } },
  ) {
    return this.testimoniesService.update(id, updateTestimonyDto, req.user.email);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a testimony (admin only)' })
  @ApiResponse({ status: 204, description: 'Testimony deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Not an admin.' })
  @ApiResponse({ status: 404, description: 'Testimony not found.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.testimoniesService.remove(id);
  }
}
