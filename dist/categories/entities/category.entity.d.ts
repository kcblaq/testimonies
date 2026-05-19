declare class CategoryCount {
    testimonies: number;
}
export declare class CategoryEntity {
    id: number;
    name: string;
    slug: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: CategoryCount;
}
export {};
