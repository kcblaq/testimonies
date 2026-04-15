import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTestimonyDto {
  @ApiProperty({
    description: 'Title of the testimony',
    example: 'How this service changed my life',
    minLength: 5,
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(5, { message: 'Title must be at least 5 characters' })
  @MaxLength(200, { message: 'Title must be at most 200 characters' })
  title: string;

  @ApiProperty({
    description: 'Full content of the testimony',
    example: 'I am grateful for the support I received. It made a real difference.',
  })
  @IsString()
  @IsNotEmpty({ message: 'Content is required' })
  @MinLength(20, { message: 'Content must be at least 20 characters' })
  @MaxLength(5000, { message: 'Content must be at most 5000 characters' })
  content: string;

  @ApiProperty({
    description: 'Full name of the person giving the testimony',
    example: 'Kelechi Ugwu',
    minLength: 2,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty({ message: 'Author name is required' })
  @MinLength(2, { message: 'Author name must be at least 2 characters' })
  @MaxLength(100, { message: 'Author name must be at most 100 characters' })
  authorName: string;

  @ApiProperty({
    description: 'Email of the person giving the testimony',
    example: 'kelechi@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Author email is required' })
  authorEmail: string;

  @ApiProperty({
    description: 'ID of the category this testimony belongs to. Use GET /categories to list options.',
    example: 1,
  })
  @IsNotEmpty({ message: 'Category is required' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  categoryId: number;
}
