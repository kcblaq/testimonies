import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CategoryCount {
  @ApiProperty({ example: 5, description: 'Number of testimonies in this category' })
  testimonies: number;
}

export class CategoryEntity {
  @ApiProperty({ example: 1, description: 'Unique category ID' })
  id: number;

  @ApiProperty({ example: 'Healing', description: 'Name of the category' })
  name: string;

  @ApiProperty({ example: 'healing', description: 'URL-friendly slug' })
  slug: string;

  @ApiPropertyOptional({ example: 'Testimonies related to healing', description: 'Optional category description' })
  description?: string;

  @ApiProperty({ example: '2026-04-15T10:00:00Z', description: 'Creation date' })
  createdAt: Date;

  @ApiProperty({ example: '2026-04-15T10:00:00Z', description: 'Last update date' })
  updatedAt: Date;

  @ApiPropertyOptional({ description: 'Counts of related records', type: CategoryCount })
  _count?: CategoryCount;
}
