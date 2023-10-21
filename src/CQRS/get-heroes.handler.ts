import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from './hero.repository';
import * as clc from 'cli-color';
import { GetHeroesQuery } from './get-heroes.query';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
    constructor(private readonly repository: HeroRepository) {}

    async execute(query: GetHeroesQuery) {
        console.log(clc.yellowBright('ASync Get HeroesQuery...'));
        console.log(query);
        return this.repository.findAll();
    }
}
