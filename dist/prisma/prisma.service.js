var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrismaService_1;
import { Injectable, Logger } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../generated/prisma/client';
let PrismaService = PrismaService_1 = class PrismaService extends PrismaClient {
    logger = new Logger(PrismaService_1.name);
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined in environment variables');
        }
        const pool = new Pool({ connectionString });
        pool.on('error', (err) => {
            this.logger.error('Unexpected error on idle Supabase client', err.stack);
        });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }
    async onModuleInit() {
        try {
            this.logger.log('Attempting to connect to Supabase...');
            await this.$connect();
            this.logger.log('✅ Prisma connected successfully to Supabase');
        }
        catch (error) {
            this.logger.error('❌ Prisma failed to connect to the database');
            this.logger.error(error.message);
            if (error.message.includes('password authentication failed')) {
                this.logger.warn('Check if your database password is correct and URL-encoded.');
            }
            if (error.message.includes('ETIMEDOUT')) {
                this.logger.warn('Connection timed out. Check if your IP is whitelisted in Supabase or if you are using the correct port.');
            }
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
PrismaService = PrismaService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PrismaService);
export { PrismaService };
//# sourceMappingURL=prisma.service.js.map