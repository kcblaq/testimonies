import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminService } from './admin.service';

export interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly adminService: AdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'change-me-in-production',
    });
  }

  async validate(payload: JwtPayload): Promise<{ email: string }> {
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
}
