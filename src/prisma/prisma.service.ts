// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // 1. Check if the URL exists before even trying to build the pool
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }

    const pool = new Pool({ connectionString });
    
    // Add an error listener to the PG Pool itself
    pool.on('error', (err) => {
      this.logger.error('Unexpected error on idle Supabase client', err.stack);
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    try {
      this.logger.log('Attempting to connect to Supabase...');
      
      // 2. This is where the actual connection is established
      await this.$connect();
      
      this.logger.log('✅ Prisma connected successfully to Supabase');
    } catch (error) {
      // 3. Detailed error logging
      this.logger.error('❌ Prisma failed to connect to the database');
      this.logger.error(error.message);
      
      if (error.message.includes('password authentication failed')) {
        this.logger.warn('Check if your database password is correct and URL-encoded.');
      }
      if (error.message.includes('ETIMEDOUT')) {
        this.logger.warn('Connection timed out. Check if your IP is whitelisted in Supabase or if you are using the correct port.');
      }
      
      // Optionally exit the process if the DB is critical
      // process.exit(1); 
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}