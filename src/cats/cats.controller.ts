import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    crete(@Body() createCatDto: CreateCatDto): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'this action returns all cats';
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `this action returns ${params.id} cats`;
    }
}
