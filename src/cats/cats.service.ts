import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
        return this.cats;
    }

    findAll(): string {
        return 'all cats';
    }

    findOne(id: number): any {
        return `this action returns ${id} cats`;
    }
}
