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
};
export type TestimonySumAggregateOutputType = {
    id: number | null;
};
export type TestimonyMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    authorEmail: string | null;
    authorName: string | null;
    status: $Enums.ReviewStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    updatedByEmail: string | null;
};
export type TestimonyMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    authorEmail: string | null;
    authorName: string | null;
    status: $Enums.ReviewStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    updatedByEmail: string | null;
};
export type TestimonyCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    authorEmail: number;
    authorName: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    updatedByEmail: number;
    _all: number;
};
export type TestimonyAvgAggregateInputType = {
    id?: true;
};
export type TestimonySumAggregateInputType = {
    id?: true;
};
export type TestimonyMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    authorEmail?: true;
    authorName?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    updatedByEmail?: true;
};
export type TestimonyMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    authorEmail?: true;
    authorName?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    updatedByEmail?: true;
};
export type TestimonyCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    authorEmail?: true;
    authorName?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    updatedByEmail?: true;
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
    authorEmail: string;
    authorName: string;
    status: $Enums.ReviewStatus;
    createdAt: Date;
    updatedAt: Date;
    updatedByEmail: string | null;
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
    authorEmail?: Prisma.StringFilter<"Testimony"> | string;
    authorName?: Prisma.StringFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedByEmail?: Prisma.StringNullableFilter<"Testimony"> | string | null;
};
export type TestimonyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type TestimonyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    OR?: Prisma.TestimonyWhereInput[];
    NOT?: Prisma.TestimonyWhereInput | Prisma.TestimonyWhereInput[];
    title?: Prisma.StringFilter<"Testimony"> | string;
    content?: Prisma.StringFilter<"Testimony"> | string;
    authorEmail?: Prisma.StringFilter<"Testimony"> | string;
    authorName?: Prisma.StringFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimony"> | Date | string;
    updatedByEmail?: Prisma.StringNullableFilter<"Testimony"> | string | null;
}, "id">;
export type TestimonyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
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
    authorEmail?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    authorName?: Prisma.StringWithAggregatesFilter<"Testimony"> | string;
    status?: Prisma.EnumReviewStatusWithAggregatesFilter<"Testimony"> | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Testimony"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Testimony"> | Date | string;
    updatedByEmail?: Prisma.StringNullableWithAggregatesFilter<"Testimony"> | string | null;
};
export type TestimonyCreateInput = {
    title: string;
    content: string;
    authorEmail: string;
    authorName: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedByEmail?: string | null;
};
export type TestimonyUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    authorEmail: string;
    authorName: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedByEmail?: string | null;
};
export type TestimonyUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TestimonyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TestimonyCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    authorEmail: string;
    authorName: string;
    status?: $Enums.ReviewStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedByEmail?: string | null;
};
export type TestimonyUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TestimonyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TestimonyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
};
export type TestimonyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TestimonyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
};
export type TestimonyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorEmail?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByEmail?: Prisma.SortOrder;
};
export type TestimonySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type TestimonySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    updatedByEmail?: boolean;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    updatedByEmail?: boolean;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    updatedByEmail?: boolean;
}, ExtArgs["result"]["testimony"]>;
export type TestimonySelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    authorEmail?: boolean;
    authorName?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    updatedByEmail?: boolean;
};
export type TestimonyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "content" | "authorEmail" | "authorName" | "status" | "createdAt" | "updatedAt" | "updatedByEmail", ExtArgs["result"]["testimony"]>;
export type $TestimonyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Testimony";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        status: $Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        updatedByEmail: string | null;
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
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestimonyFieldRefs {
    readonly id: Prisma.FieldRef<"Testimony", 'Int'>;
    readonly title: Prisma.FieldRef<"Testimony", 'String'>;
    readonly content: Prisma.FieldRef<"Testimony", 'String'>;
    readonly authorEmail: Prisma.FieldRef<"Testimony", 'String'>;
    readonly authorName: Prisma.FieldRef<"Testimony", 'String'>;
    readonly status: Prisma.FieldRef<"Testimony", 'ReviewStatus'>;
    readonly createdAt: Prisma.FieldRef<"Testimony", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Testimony", 'DateTime'>;
    readonly updatedByEmail: Prisma.FieldRef<"Testimony", 'String'>;
}
export type TestimonyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
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
};
export type TestimonyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
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
};
export type TestimonyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimonyCreateInput, Prisma.TestimonyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestimonyUpdateInput, Prisma.TestimonyUncheckedUpdateInput>;
};
export type TestimonyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
    where: Prisma.TestimonyWhereUniqueInput;
};
export type TestimonyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonyWhereInput;
    limit?: number;
};
export type TestimonyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonySelect<ExtArgs> | null;
    omit?: Prisma.TestimonyOmit<ExtArgs> | null;
};
export {};
