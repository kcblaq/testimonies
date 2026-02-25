import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGuard } from './admin.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AdminGuard)
  @Post('add')
  addAdmin(@Body('email') email: string): string {
    this.adminService.addAdmin(email);
    return `Admin with email ${email} added successfully.`;
  }
  
  @UseGuards(AdminGuard)
  @Post('remove')
  removeAdmin(@Body('email') email: string): string {
    const removed = this.adminService.removeAdmin(email);
    if (removed) {
      return `Admin with email ${email} removed successfully.`;
    }
    return `Admin with email ${email} not found.`;
  }

  @UseGuards(AdminGuard)
  @Post('list')
  listAdmins(): string[] {
    return this.adminService.getAllAdmins();
  }
}
