import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsInt, Min, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO for admin to approve/reject a testimony or update its category.
 */
export class UpdateTestimonyDto {
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
    description: 'Category ID. Omit to leave unchanged; send null to clear category.',
    example: 1,
  })
  @IsOptional()
  @ValidateIf((_, v) => v != null)
  @Type(() => Number)
  @IsInt()
  @Min(1)
  categoryId?: number | null;
}
