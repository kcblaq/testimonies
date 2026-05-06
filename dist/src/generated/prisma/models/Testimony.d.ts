import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TestimonyModel = runtime.Types.Result.DefaultSelection<Prisma.$TestimonyPayload>;
export type AggregateTestimony = {
    _count: TestimonyCountAggregateOutputType | null;
    _avg: TestimonyAvgAggregateOutputType | null;
    _sum: TestimonySumAggregateOutputType | null;
    _min: TestimonyMinAggregateOutputType | null;
    _max: TestimonyMaxAggregateOutputType | null;
};
export type TestimonyAvgAggregateOutputType = {
    id: number | null;
    views: number | null;
    shared: number | null;
    categoryId: number | null;
};
export type TestimonySumAggregateOutputType = {
    id: number | null;
    views: number | null;
    shared: number | null;
    categoryId: number | null;
};
export type TestimonyMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    status: $Enums.ReviewStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorEmail: string | null;
    authorName: string | null;
    updatedByEmail: string | null;
    isFeatured: boolean | null;
    featuredAt: Date | null;
    views: number | null;
    shared: number | null;
    categoryId: number | null;
};
export type TestimonyMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    status: $Enums.ReviewStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorEmail: string | null;
    authorName: string | null;
    updatedByEmail: string | null;
    isFeatured: boolean | null;
    featuredAt: Date | null;
    views: number | null;
    shared: number | null;
    categoryId: number | null;
};
export type TestimonyCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    authorEmail: number;
    authorName: number;
    updatedByEmail: number;
    isFeatured: number;
    featuredAt: number;
    views: number;
    shared: number;
    categoryId: number;
    _all: number;
};
export type TestimonyAvgAggregateInputType = {
    id?: true;
    views?: true;
    shared?: true;
    categoryId?: true;
};
export type TestimonySumAggregateInputType = {
    id?: true;
    views?: true;
    shared?: true;
    categoryId?: true;
};
export type TestimonyMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    authorEmail?: true;
    authorName?: true;
    updatedByEmail?: true;
    isFeatured?: true;
    featuredAt?: true;
    views?: true;
    shared?: true;
    categoryId?: true;
};
export type TestimonyMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    authorEmail?: true;
    authorName?: true;
    updatedByEmail?: true;
    isFeatured?: true;
    featuredAt?: true;
    views?: true;
    shared?: true;
    categoryId?: true;
};
export type TestimonyCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    authorEmail?: true;
    authorName?: true;
    updatedByEmail?: true;
    isFeatured?: true;
    featuredAt?: true;
    views?: true;
    shared?: true;
    categoryId?: true;
    _all?: true;
};
export type TestimonyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonyWhereInput;
    orderBy?: Prisma.TestimonyOrderByWithRelationInput | Prisma.TestimonyOrderByWithRelationInput[];
    cursor?: Prisma.TestimonyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestimonyCountAggregateInputType;
    _avg?: TestimonyAvgAggregateInputType;
    _sum?: TestimonySumAggregateInputType;
    _min?: TestimonyMinAggregateInputType;
    _max?: TestimonyMaxAggregateInputType;
};
export type GetTestimonyAggregateType<T extends TestimonyAggregateArgs> = {
    [P in keyof T & keyof AggregateTestimony]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestimony[P]> : Prisma.GetScalarType<T[P], AggregateTestimony[P]>;
};
export type TestimonyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonyWhereInput;
    orderBy?: Prisma.TestimonyOrderByWithAggregationInput | Prisma.TestimonyOrderByWithAggregationInput[];
    by: Prisma.TestimonyScalarFieldEnum[] | Prisma.TestimonyScalarFieldEnum;
    having?: Prisma.TestimonyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestimonyCountAggregateInputType | true;
    _avg?: TestimonyAvgAggregateInputType;
    _sum?: TestimonySumAggregateInputType;
    _min?: TestimonyMinAggregateInputType;
    _max?: TestimonyMaxAggregateInputType;
};
export type TestimonyGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    status: $Enums.ReviewStatus;
    createdAt: Date;
    updatedAt: Date;
    authorEmail: string;
    authorName: string;
    updatedByEmail: string | null;
    isFeatured: boolean;
    featuredAt: Date | null;
    views: number;
    shared: number;
    categoryId: number;
    _count: TestimonyCountAggregateOutputType | null;
    _avg: TestimonyAvgAggregateOutputType | null;
    _sum: TestimonySumAggregateOutputType | null;
    _min: TestimonyMinAggregateOutputType | null;
    _max: TestimonyMaxAggregateOutputType | null;
};
type GetTestimonyGroupByPayload<T extends TestimonyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestimonyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestimonyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestimonyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestimonyGroupByOutputType[P]>;
}>>;
export type TestimonyWhereInput = {
    AND?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    OR?: Prisma.TestimonyWhereInput[];
    NOT?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    id?: Prisma.IntFilter<"Testimony"> | number;
    title?: Prisma.StringFilter<"Testimony"> | string;
    content?: Prisma.StringFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    authorEmail?: Prisma.StringFilter<"Testimony"> | string;
    authorName?: Prisma.StringFilter<"Testimony"> | string;
    updatedByEmail?: Prisma.StringNullableFilter<"Testimony"> | string | null;
    isFeatured?: Prisma.BoolFilter<"Testimony"> | boolean;
    featuredAt?: Prisma.DateTimeNullableFilter<"Testimony"> | Date | string | null;
    views?: Prisma.IntFilter<"Testimony"> | number;
    shared?: Prisma.IntFilter<"Testimony"> | number;
    categoryId?: Prisma.IntFilter<"Testimony"> | number;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
};
export type TestimonyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    featuredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
};
export type TestimonyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    OR?: Prisma.TestimonyWhereInput[];
    NOT?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    title?: Prisma.StringFilter<"Testimony"> | string;
    content?: Prisma.StringFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    authorEmail?: Prisma.StringFilter<"Testimony"> | string;
    authorName?: Prisma.StringFilter<"Testimony"> | string;
    updatedByEmail?: Prisma.StringNullableFilter<"Testimony"> | string | null;
    isFeatured?: Prisma.BoolFilter<"Testimony"> | boolean;
    featuredAt?: Prisma.DateTimeNullableFilter<"Testimony"> | Date | string | null;
    views?: Prisma.IntFilter<"Testimony"> | number;
    shared?: Prisma.IntFilter<"Testimony"> | number;
    categoryId?: Prisma.IntFilter<"Testimony"> | number;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
}, "id">;
export type TestimonyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    featuredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    _count?: Prisma.TestimonyCountOrderByAggregateInput;
    _avg?: Prisma.TestimonyAvgOrderByAggregateInput;
    _max?: Prisma.TestimonyMaxOrderByAggregateInput;
    _min?: Prisma.TestimonyMinOrderByAggregateInput;
    _sum?: Prisma.TestimonySumOrderByAggregateInput;
};
export type TestimonyScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestimonyScalarWhereWithAggregatesInput | Prisma.TestimonyScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestimonyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestimonyScalarWhereWithAggregatesInput | Prisma.TestimonyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Testimony"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusWithAggregatesFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Testimony"> | Date | string;
    authorEmail?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    authorName?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    updatedByEmail?: Prisma.StringNullableWithAggregatesFilter<"Testimony"> | string | null;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"Testimony"> | boolean;
    featuredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Testimony"> | Date | string | null;
    views?: Prisma.IntWithAggregatesFilter<"Testimony"> | number;
    shared?: Prisma.IntWithAggregatesFilter<"Testimony"> | number;
    categoryId?: Prisma.IntWithAggregatesFilter<"Testimony"> | number;
};
export type TestimonyCreateInput = {
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
    category: Prisma.CategoryCreateNestedOneWithoutTestimoniesInput;
};
export type TestimonyUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
    categoryId: number;
};
export type TestimonyUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.CategoryUpdateOneRequiredWithoutTestimoniesNestedInput;
};
export type TestimonyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonyCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
    categoryId: number;
};
export type TestimonyUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    featuredAt?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type TestimonyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type TestimonyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    featuredAt?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type TestimonyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    featuredAt?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type TestimonySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    shared?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type TestimonyListRelationFilter = {
    every?: Prisma.TestimonyWhereInput;
    some?: Prisma.TestimonyWhereInput;
    none?: Prisma.TestimonyWhereInput;
};
export type TestimonyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus;
};
export type TestimonyCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput> | Prisma.TestimonyCreateWithoutCategoryInput[] | Prisma.TestimonyUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TestimonyCreateOrConnectWithoutCategoryInput | Prisma.TestimonyCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.TestimonyCreateManyCategoryInputEnvelope;
    connect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
};
export type TestimonyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput> | Prisma.TestimonyCreateWithoutCategoryInput[] | Prisma.TestimonyUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TestimonyCreateOrConnectWithoutCategoryInput | Prisma.TestimonyCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.TestimonyCreateManyCategoryInputEnvelope;
    connect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
};
export type TestimonyUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput> | Prisma.TestimonyCreateWithoutCategoryInput[] | Prisma.TestimonyUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TestimonyCreateOrConnectWithoutCategoryInput | Prisma.TestimonyCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.TestimonyUpsertWithWhereUniqueWithoutCategoryInput | Prisma.TestimonyUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.TestimonyCreateManyCategoryInputEnvelope;
    set?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    disconnect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    delete?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    connect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    update?: Prisma.TestimonyUpdateWithWhereUniqueWithoutCategoryInput | Prisma.TestimonyUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.TestimonyUpdateManyWithWhereWithoutCategoryInput | Prisma.TestimonyUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.TestimonyScalarWhereInput | Prisma.TestimonyScalarWhereInput[];
};
export type TestimonyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput> | Prisma.TestimonyCreateWithoutCategoryInput[] | Prisma.TestimonyUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TestimonyCreateOrConnectWithoutCategoryInput | Prisma.TestimonyCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.TestimonyUpsertWithWhereUniqueWithoutCategoryInput | Prisma.TestimonyUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.TestimonyCreateManyCategoryInputEnvelope;
    set?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    disconnect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    delete?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    connect?: Prisma.TestimonyWhereUniqueInput | Prisma.TestimonyWhereUniqueInput[];
    update?: Prisma.TestimonyUpdateWithWhereUniqueWithoutCategoryInput | Prisma.TestimonyUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.TestimonyUpdateManyWithWhereWithoutCategoryInput | Prisma.TestimonyUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.TestimonyScalarWhereInput | Prisma.TestimonyScalarWhereInput[];
};
export type TestimonyCreateWithoutCategoryInput = {
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
};
export type TestimonyUncheckedCreateWithoutCategoryInput = {
    id?: number;
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
};
export type TestimonyCreateOrConnectWithoutCategoryInput = {
    where: Prisma.TestimonyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput>;
};
export type TestimonyCreateManyCategoryInputEnvelope = {
    data: Prisma.TestimonyCreateManyCategoryInput | Prisma.TestimonyCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type TestimonyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.TestimonyWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestimonyUpdateWithoutCategoryInput, Prisma.TestimonyUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.TestimonyCreateWithoutCategoryInput, Prisma.TestimonyUncheckedCreateWithoutCategoryInput>;
};
export type TestimonyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.TestimonyWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestimonyUpdateWithoutCategoryInput, Prisma.TestimonyUncheckedUpdateWithoutCategoryInput>;
};
export type TestimonyUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.TestimonyScalarWhereInput;
    data: Prisma.XOR<Prisma.TestimonyUpdateManyMutationInput, Prisma.TestimonyUncheckedUpdateManyWithoutCategoryInput>;
};
export type TestimonyScalarWhereInput = {
    AND?: Prisma.TestimonyScalarWhereInput | Prisma.TestimonyScalarWhereInput[];
    OR?: Prisma.TestimonyScalarWhereInput[];
    NOT?: Prisma.TestimonyScalarWhereInput | Prisma.TestimonyScalarWhereInput[];
    id?: Prisma.IntFilter<"Testimony"> | number;
    title?: Prisma.StringFilter<"Testimony"> | string;
    content?: Prisma.StringFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    authorEmail?: Prisma.StringFilter<"Testimony"> | string;
    authorName?: Prisma.StringFilter<"Testimony"> | string;
    updatedByEmail?: Prisma.StringNullableFilter<"Testimony"> | string | null;
    isFeatured?: Prisma.BoolFilter<"Testimony"> | boolean;
    featuredAt?: Prisma.DateTimeNullableFilter<"Testimony"> | Date | string | null;
    views?: Prisma.IntFilter<"Testimony"> | number;
    shared?: Prisma.IntFilter<"Testimony"> | number;
    categoryId?: Prisma.IntFilter<"Testimony"> | number;
};
export type TestimonyCreateManyCategoryInput = {
    id?: number;
    title: string;
    content: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorEmail: string;
    authorName: string;
    updatedByEmail?: string | null;
    isFeatured?: boolean;
    featuredAt?: Date | string | null;
    views?: number;
    shared?: number;
};
export type TestimonyUpdateWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonyUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonyUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    featuredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    shared?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestimonySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    updatedByEmail?: boolean;
    isFeatured?: boolean;
    featuredAt?: boolean;
    views?: boolean;
    shared?: boolean;
    categoryId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    updatedByEmail?: boolean;
    isFeatured?: boolean;
    featuredAt?: boolean;
    views?: boolean;
    shared?: boolean;
    categoryId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    updatedByEmail?: boolean;
    isFeatured?: boolean;
    featuredAt?: boolean;
    views?: boolean;
    shared?: boolean;
    categoryId?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    updatedByEmail?: boolean;
    isFeatured?: boolean;
    featuredAt?: boolean;
    views?: boolean;
    shared?: boolean;
    categoryId?: boolean;
};
export type TestimonyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "content" | "status" | "createdAt" | "updatedAt" | "authorEmail" | "authorName" | "updatedByEmail" | "isFeatured" | "featuredAt" | "views" | "shared" | "categoryId", ExtArgs["result"]["testimony"]>;
export type TestimonyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type TestimonyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type TestimonyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $TestimonyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Testimony";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        content: string;
        status: $Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }, ExtArgs["result"]["testimony"]>;
    composites: {};
};
export type TestimonyGetPayload<S extends boolean | null | undefined | TestimonyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestimonyPayload, S>;
export type TestimonyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestimonyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestimonyCountAggregateInputType | true;
};
export interface TestimonyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Testimony'];
        meta: {
            name: 'Testimony';
        };
    };
    findUnique<T extends TestimonyFindUniqueArgs>(args: Prisma.SelectSubset<T, TestimonyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestimonyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestimonyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestimonyFindFirstArgs>(args?: Prisma.SelectSubset<T, TestimonyFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestimonyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestimonyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestimonyFindManyArgs>(args?: Prisma.SelectSubset<T, TestimonyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestimonyCreateArgs>(args: Prisma.SelectSubset<T, TestimonyCreateArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestimonyCreateManyArgs>(args?: Prisma.SelectSubset<T, TestimonyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestimonyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestimonyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestimonyDeleteArgs>(args: Prisma.SelectSubset<T, TestimonyDeleteArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestimonyUpdateArgs>(args: Prisma.SelectSubset<T, TestimonyUpdateArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestimonyDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestimonyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestimonyUpdateManyArgs>(args: Prisma.SelectSubset<T, TestimonyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestimonyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestimonyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestimonyUpsertArgs>(args: Prisma.SelectSubset<T, TestimonyUpsertArgs<ExtArgs>>): Prisma.Prisma__TestimonyClient<runtime.Types.Result.GetResult<Prisma.$TestimonyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestimonyCountArgs>(args?: Prisma.Subset<T, TestimonyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestimonyCountAggregateOutputType> : number>;
    aggregate<T extends TestimonyAggregateArgs>(args: Prisma.Subset<T, TestimonyAggregateArgs>): Prisma.PrismaPromise<GetTestimonyAggregateType<T>>;
    groupBy<T extends TestimonyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestimonyGroupByArgs['orderBy'];
    } : {
        orderBy?: TestimonyGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestimonyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestimonyFieldRefs;
}
export interface Prisma__TestimonyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestimonyFieldRefs {
    readonly id: Prisma.FieldRef<"Testimony", 'Int'>;
    readonly title: Prisma.FieldRef<"Testimony", 'String'>;
    readonly content: Prisma.FieldRef<"Testimony", 'String'>;
    readonly status: Prisma.FieldRef<"Testimony", 'ReviewStatus'>;
    readonly createdAt: Prisma.FieldRef<"Testimony", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Testimony", 'DateTime'>;
    readonly authorEmail: Prisma.FieldRef<"Testimony", 'String'>;
    readonly authorName: Prisma.FieldRef<"Testimony", 'String'>;
    readonly updatedByEmail: Prisma.FieldRef<"Testimony", 'String'>;
    readonly isFeatured: Prisma.FieldRef<"Testimony", 'Boolean'>;
    readonly featuredAt: Prisma.FieldRef<"Testimony", 'DateTime'>;
    readonly views: Prisma.FieldRef<"Testimony", 'Int'>;
    readonly shared: Prisma.FieldRef<"Testimony", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Testimony", 'Int'>;
}
export type TestimonyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where?: Prisma.TestimonyWhereInput;
    orderBy?: Prisma.TestimonyOrderByWithRelationInput | Prisma.TestimonyOrderByWithRelationInput[];
    cursor?: Prisma.TestimonyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonyScalarFieldEnum | Prisma.TestimonyScalarFieldEnum[];
};
export type TestimonyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where?: Prisma.TestimonyWhereInput;
    orderBy?: Prisma.TestimonyOrderByWithRelationInput | Prisma.TestimonyOrderByWithRelationInput[];
    cursor?: Prisma.TestimonyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonyScalarFieldEnum | Prisma.TestimonyScalarFieldEnum[];
};
export type TestimonyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where?: Prisma.TestimonyWhereInput;
    orderBy?: Prisma.TestimonyOrderByWithRelationInput | Prisma.TestimonyOrderByWithRelationInput[];
    cursor?: Prisma.TestimonyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonyScalarFieldEnum | Prisma.TestimonyScalarFieldEnum[];
};
export type TestimonyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonyCreateInput, Prisma.TestimonyUncheckedCreateInput>;
};
export type TestimonyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestimonyCreateManyInput | Prisma.TestimonyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestimonyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    data: Prisma.TestimonyCreateManyInput | Prisma.TestimonyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestimonyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestimonyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonyUpdateInput, Prisma.TestimonyUncheckedUpdateInput>;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestimonyUpdateManyMutationInput, Prisma.TestimonyUncheckedUpdateManyInput>;
    where?: Prisma.TestimonyWhereInput;
    limit?: number;
};
export type TestimonyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonyUpdateManyMutationInput, Prisma.TestimonyUncheckedUpdateManyInput>;
    where?: Prisma.TestimonyWhereInput;
    limit?: number;
    include?: Prisma.TestimonyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestimonyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimonyCreateInput, Prisma.TestimonyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestimonyUpdateInput, Prisma.TestimonyUncheckedUpdateInput>;
};
export type TestimonyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonyWhereInput;
    limit?: number;
};
export type TestimonyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    include?: Prisma.TestimonyInclude<ExtArgs> | null;
};
export {};
