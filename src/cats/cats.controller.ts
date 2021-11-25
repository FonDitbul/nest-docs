import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    // UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
// import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    crete(@Body() createCatDto: CreateCatDto): string {
        return 'This action adds a new cat';
    }

    @Get()
    // @UserFilters(HttpExceptionFilter)
    findAll(): string {
        throw new ForbiddenException();
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `this action returns ${params.id} cats`;
    }
}
