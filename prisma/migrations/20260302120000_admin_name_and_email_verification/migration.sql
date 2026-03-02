-- AlterTable: Add name (required), emailVerified, and email verification token fields to Admin
ALTER TABLE "Admin" ADD COLUMN "name" TEXT;
UPDATE "Admin" SET "name" = 'Admin' WHERE "name" IS NULL;
ALTER TABLE "Admin" ALTER COLUMN "name" SET NOT NULL;

ALTER TABLE "Admin" ADD COLUMN "emailVerified" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Admin" ADD COLUMN "emailVerificationToken" TEXT;
ALTER TABLE "Admin" ADD COLUMN "emailVerificationTokenExpiresAt" TIMESTAMP(3);

CREATE INDEX "Admin_emailVerificationToken_idx" ON "Admin"("emailVerificationToken");
