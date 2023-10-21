import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './kill-dragon.command';
import { Injectable } from '@nestjs/common';
import { GetHeroesQuery } from './get-heroes.query';
import { Hero } from './hero.model';

export interface KillDragonDto {
    heroId: string;
    dragonId: string;
}

@Injectable()
export class HeroesGameService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async killDragon(heroId: string, killDragonDto: KillDragonDto) {
        return this.commandBus.execute(
            new KillDragonCommand(heroId, killDragonDto.dragonId),
        );
    }

    async findAll(): Promise<Hero[]> {
        return this.queryBus.execute(new GetHeroesQuery());
    }
}
