
import bcrypt from 'bcrypt';
import { PrismaService } from "../src/prisma/prisma.service";


async function createAdminUser() {
    const prisma = new PrismaService();

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash('Pass@123', salt);

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
    } catch (error) {
        console.log(error);
    }
}