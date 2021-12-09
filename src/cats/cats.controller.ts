import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    // UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
// import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    crete(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    // @UserFilters(HttpExceptionFilter)
    findAll(): string {
        throw new ForbiddenException();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): string {
        return this.catsService.findOne(id);
    }
}
