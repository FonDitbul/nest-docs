import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';

// import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    // @SetMetadata('roles', ['admin'])
    crete(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    @UseInterceptors(TransformInterceptor)
    findAll(): string {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): string {
        return this.catsService.findOne(id);
    }
}
