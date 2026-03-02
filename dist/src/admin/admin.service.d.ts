import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly SALT_ROUNDS;
    isAdmin(email: string): Promise<boolean>;
    validateAdmin(email: string, password: string): Promise<{
        email: string;
        name: string;
    }>;
    private generateVerificationToken;
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
}
