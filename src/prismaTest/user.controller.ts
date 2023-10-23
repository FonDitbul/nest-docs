import { Controller, Get, Inject, Post } from '@nestjs/common';
import { UserRepository } from './user.repository.prisma';

@Controller('user')
export class UserController {
    constructor(
        @Inject('UserRepository') private userRepository: UserRepository,
    ) {}

    @Get()
    async findOne() {
        const user = await this.userRepository.findOne(1);
        return user;
    }

    @Post('')
    async create() {
        await this.userRepository.create({
            email: 'test@gmail.com',
            name: 'test 용도',
            acceptTermsAndConditions: true,
        });
    }
}
