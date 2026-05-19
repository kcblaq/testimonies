import { Strategy } from 'passport-jwt';
import { AdminService } from './admin.service';
export interface JwtPayload {
    sub: string;
    email: string;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly adminService;
    constructor(adminService: AdminService);
    validate(payload: JwtPayload): Promise<{
        email: string;
    }>;
}
export {};
