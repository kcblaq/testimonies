import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
export declare class AdminService {
    private readonly prisma;
    private readonly emailService;
    constructor(prisma: PrismaService, emailService: EmailService);
    private readonly SALT_ROUNDS;
    isAdmin(email: string): Promise<boolean>;
    validateAdmin(email: string, password: string): Promise<{
        email: string;
        name: string;
    }>;
    generateVerificationToken(email: string, name: string): {
        token: string;
        expiresAt: Date;
    };
    register(name: string, email: string, password: string): Promise<{
        email: string;
        message: string;
        verificationToken: string;
    }>;
    addAdmin(name: string, email: string, password: string): Promise<{
        email: string;
        message: string;
        verificationToken: string;
    }>;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    removeAdmin(email: string): Promise<boolean>;
    getAllAdmins(): Promise<{
        email: string;
        name: string;
        emailVerified: boolean;
    }[]>;
    deleteAllAdmins(): Promise<{
        message: string;
    }>;
    resendVerificationToken(email: string): Promise<{
        message: string;
    }>;
    dashboarddata(): Promise<{
        totalTestimonies: number;
        approvedTestimonies: number;
        rejectedTestimonies: number;
        pendingTestimonies: number;
        totalCategories: number;
        totalAdmins: number;
        submitionsThisWeek: number;
        submitionsToday: number;
        totalViews: import(".prisma/client").Prisma.GetTestimonyAggregateType<{
            _sum: {
                views: true;
            };
        }>;
        totalShares: import(".prisma/client").Prisma.GetTestimonyAggregateType<{
            _sum: {
                shared: true;
            };
        }>;
        categorieswithcount: {
            categoryId: number;
            categoryName: string;
            count: number;
        }[];
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map