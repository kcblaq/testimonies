-- AlterTable: Make updatedByEmail optional (only set when admin approves/rejects)
ALTER TABLE "Testimony" ALTER COLUMN "updatedByEmail" DROP NOT NULL;
