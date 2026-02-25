import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AdminService } from './admin.service';
export declare class AdminGuard implements CanActivate {
    private AdminService;
    constructor(AdminService: AdminService);
    canActivate(context: ExecutionContext): boolean;
}
