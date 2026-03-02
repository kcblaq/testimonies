import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

/**
 * DTO for admin to approve or reject a testimony.
 * Only status is writable; updatedByEmail is set from the authenticated admin.
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
}
