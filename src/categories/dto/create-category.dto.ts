import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Healing', description: 'Category display name' })
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(50, { message: 'Name must be at most 50 characters' })
  name: string;

  @ApiPropertyOptional({
    example: 'healing',
    description: 'URL-friendly slug. Defaults to lowercased name if not provided.',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  slug?: string;

  @ApiPropertyOptional({ description: 'Optional category description' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  description?: string;
}
