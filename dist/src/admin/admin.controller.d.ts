import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    addAdmin(email: string): string;
    removeAdmin(email: string): string;
    listAdmins(): string[];
}
