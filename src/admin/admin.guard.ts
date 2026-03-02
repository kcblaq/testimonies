import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly adminService: AdminService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.user?.email;
    if (!email) {
      throw new UnauthorizedException('Authentication required. Please log in.');
    }
    const isAdmin = await this.adminService.isAdmin(email);
    if (!isAdmin) {
      throw new ForbiddenException('Access denied. Not an admin.');
    }
    return true;
  }
}
