import { CommandBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './kill-dragon.command';
import { Injectable } from '@nestjs/common';

export interface KillDragonDto {
    heroId: string;
    dragonId: string;
}

@Injectable()
export class HeroesGameService {
    constructor(private commandBus: CommandBus) {}

    async killDragon(heroId: string, killDragonDto: KillDragonDto) {
        return this.commandBus.execute(
            new KillDragonCommand(heroId, killDragonDto.dragonId),
        );
    }
}
