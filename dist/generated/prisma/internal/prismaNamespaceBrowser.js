import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Admin: 'Admin',
    Testimony: 'Testimony',
    Category: 'Category'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AdminScalarFieldEnum = {
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    password: 'password',
    id: 'id',
    name: 'name',
    emailVerified: 'emailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpiresAt: 'emailVerificationTokenExpiresAt'
};
export const TestimonyScalarFieldEnum = {
    id: 'id',
    title: 'title',
    content: 'content',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorEmail: 'authorEmail',
    authorName: 'authorName',
    updatedByEmail: 'updatedByEmail',
    isFeatured: 'isFeatured',
    featuredAt: 'featuredAt',
    views: 'views',
    shared: 'shared',
    categoryId: 'categoryId'
};
export const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map