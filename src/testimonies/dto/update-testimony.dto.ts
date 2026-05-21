import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsOptional,
  IsInt,
  Min,
  IsBoolean,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO for admin to approve/reject a testimony or update its category.
 */
export class UpdateTestimonyDto {
  @ApiPropertyOptional({
    description: 'Title of the testimony',
    example: 'How this service changed my life',
    minLength: 5,
    maxLength: 200,
  })
  @IsOptional()
  @IsString()
  @MinLength(5, { message: 'Title must be at least 5 characters' })
  @MaxLength(200, { message: 'Title must be at most 200 characters' })
  title?: string;

  @ApiPropertyOptional({
    description: 'Full content of the testimony',
    example:
      'I am grateful for the support I received. It made a real difference.',
  })
  @IsOptional()
  @IsString()
  @MinLength(20, { message: 'Content must be at least 20 characters' })
  @MaxLength(5000, { message: 'Content must be at most 5000 characters' })
  content?: string;

  @ApiPropertyOptional({
    description: 'Review status: APPROVED or REJECTED',
    enum: ['APPROVED', 'REJECTED'],
    example: 'APPROVED',
  })
  @IsOptional()
  @IsIn(['APPROVED', 'REJECTED'], {
    message: 'Status must be either APPROVED or REJECTED',
  })
  status?: 'APPROVED' | 'REJECTED';

  @ApiPropertyOptional({
    description: 'Category ID. Omit to leave unchanged.',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  categoryId?: number;

  @ApiPropertyOptional({
    description: 'Whether the testimony is featured (admin only)',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;
}
