var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminService } from './admin.service';
let JwtStrategy = class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    adminService;
    constructor(adminService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'change-me-in-production',
        });
        this.adminService = adminService;
    }
    async validate(payload) {
        const email = payload.email || payload.sub;
        if (!email) {
            throw new UnauthorizedException('Invalid token.');
        }
        const isAdmin = await this.adminService.isAdmin(email);
        if (!isAdmin) {
            throw new UnauthorizedException('Admin no longer exists.');
        }
        return { email };
    }
};
JwtStrategy = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AdminService])
], JwtStrategy);
export { JwtStrategy };
//# sourceMappingURL=jwt.strategy.js.map