import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    // UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
import { JoiValidationPipe } from '../common/pipes/joivalidation.pipe';
// import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    crete(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    // @UserFilters(HttpExceptionFilter)
    findAll(): string {
        throw new ForbiddenException();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): string {
        return this.catsService.findOne(id);
    }
}
