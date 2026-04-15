import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);
  private readonly maxConnectAttempts = Number(process.env.PRISMA_CONNECT_RETRIES ?? 8);
  private readonly baseBackoffMs = Number(process.env.PRISMA_CONNECT_BACKOFF_MS ?? 2000);

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.connectWithRetry();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  private async connectWithRetry() {
    let attempt = 1;
    let lastError: unknown;

    while (attempt <= this.maxConnectAttempts) {
      try {
        await this.$connect();
        this.logger.log(`Prisma connected (attempt ${attempt}/${this.maxConnectAttempts})`);
        return;
      } catch (error) {
        lastError = error;
        const waitMs = Math.min(this.baseBackoffMs * attempt, 15000);
        this.logger.warn(
          `Prisma connection attempt ${attempt}/${this.maxConnectAttempts} failed. Retrying in ${waitMs}ms...`,
        );
        await this.sleep(waitMs);
        attempt += 1;
      }
    }

    this.logger.error(
      `Failed to connect to database after ${this.maxConnectAttempts} attempts.`,
      lastError instanceof Error ? lastError.stack : String(lastError),
    );
    throw lastError;
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
