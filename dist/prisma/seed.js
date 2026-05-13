"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_service_1 = require("../src/prisma/prisma.service");
async function createAdminUser() {
    const prisma = new prisma_service_1.PrismaService();
    try {
        const salt = await bcrypt_1.default.genSalt();
        const hashedPassword = await bcrypt_1.default.hash('Pass@123', salt);
        const adminUser = await prisma.admin.upsert({
            where: {
                email: 'kcblack22@gmail.com',
            },
            update: {
                password: hashedPassword,
            },
            create: {
                email: 'kcblack22@gmail.com',
                password: hashedPassword,
                name: 'Admin',
            },
        });
        console.log(adminUser);
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=seed.js.map