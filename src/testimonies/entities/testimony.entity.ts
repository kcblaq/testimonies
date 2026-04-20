import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum ReviewStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export class TestimonyEntity {
  @ApiProperty({ example: 1, description: 'Unique testimony ID' })
  id: number;

  @ApiProperty({ example: 'My Healing Story', description: 'Title of the testimony' })
  title: string;

  @ApiProperty({ example: 'I was healed...', description: 'Content of the testimony' })
  content: string;

  @ApiProperty({ enum: ReviewStatus, example: ReviewStatus.PENDING, description: 'Current status' })
  status: ReviewStatus;

  @ApiProperty({ example: '2026-04-15T10:00:00Z', description: 'Creation date' })
  createdAt: Date;

  @ApiProperty({ example: '2026-04-15T10:00:00Z', description: 'Last update date' })
  updatedAt: Date;

  @ApiProperty({ example: 'test@example.com', description: 'Author email' })
  authorEmail: string;

  @ApiProperty({ example: 'John Doe', description: 'Author name' })
  authorName: string;

  @ApiPropertyOptional({ example: 'admin@example.com', description: 'Admin who updated it last' })
  updatedByEmail?: string;

  @ApiProperty({ example: 1, description: 'Associated Category ID' })
  categoryId: number;
}
