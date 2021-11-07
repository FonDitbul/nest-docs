import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    crete(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'this action returns all cats';
    }
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `this action returns ${params.id} cats`;
    }
}
