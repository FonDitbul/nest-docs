import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './database/infrastructure/prisma.service';

export interface UserRepository {
    findOne(id: number): Promise<User>;
    create(createUser: Partial<User>): Promise<void>;
}

@Injectable()
export class UserRepositoryPrisma implements UserRepository {
    constructor(private prisma: PrismaService) {}

    async findOne(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async create(createUser: Partial<User>) {
        this.prisma.user.create({
            data: {
                name: createUser.name!,
                email: createUser.email!,
                acceptTermsAndConditions: createUser.acceptTermsAndConditions!,
            },
        });
    }
}
