export declare class AdminService {
    private adminEmails;
    isAdmin(email: string): boolean;
    addAdmin(email: string): void;
    removeAdmin(email: string): boolean;
    getAllAdmins(): string[];
}
