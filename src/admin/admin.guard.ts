import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private AdminService: AdminService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const email = request.user.email;
    if (!this.AdminService.isAdmin(email)) {
      throw new ForbiddenException('Access denied. Not an admin.');
    }
    return this.AdminService.isAdmin(email);
  }


}
