/**
 * DTO for admin to approve/reject a testimony or update its category.
 */
export declare class UpdateTestimonyDto {
    title?: string;
    content?: string;
    status?: 'APPROVED' | 'REJECTED';
    categoryId?: number;
    isFeatured?: boolean;
}
//# sourceMappingURL=update-testimony.dto.d.ts.map