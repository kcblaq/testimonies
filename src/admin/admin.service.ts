import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  private adminEmails = ['kcblack22@gmail.com'];

  isAdmin(email: string): boolean {
    if(!email) {
      throw new Error('Email is required to check admin status');
    }
    return this.adminEmails.includes(email);
  }

  addAdmin(email: string): void {
    if (!this.adminEmails.includes(email)) {
      this.adminEmails.push(email);
    }
  }

  removeAdmin(email: string): boolean {
    const index = this.adminEmails.indexOf(email);
    if (index > -1) {
      this.adminEmails.splice(index, 1);
      return true;
    }
    return false;
  }

  getAllAdmins(): string[] {
    return [...this.adminEmails];
  }
}
