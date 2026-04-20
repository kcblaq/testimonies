export declare enum ReviewStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
export declare class TestimonyEntity {
    id: number;
    title: string;
    content: string;
    status: ReviewStatus;
    createdAt: Date;
    updatedAt: Date;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string;
    categoryId: number;
}
