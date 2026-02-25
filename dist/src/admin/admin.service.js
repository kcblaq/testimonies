"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
let AdminService = class AdminService {
    adminEmails = ['kcblack22@gmail.com'];
    isAdmin(email) {
        if (!email) {
            throw new Error('Email is required to check admin status');
        }
        return this.adminEmails.includes(email);
    }
    addAdmin(email) {
        if (!this.adminEmails.includes(email)) {
            this.adminEmails.push(email);
        }
    }
    removeAdmin(email) {
        const index = this.adminEmails.indexOf(email);
        if (index > -1) {
            this.adminEmails.splice(index, 1);
            return true;
        }
        return false;
    }
    getAllAdmins() {
        return [...this.adminEmails];
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)()
], AdminService);
//# sourceMappingURL=admin.service.js.map