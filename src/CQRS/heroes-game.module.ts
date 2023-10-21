import { CqrsModule } from '@nestjs/cqrs';
import { KillDragonHandler } from './kill-dragon.handler';
import { DropAncientItemHandler } from './drop/drop-ancient-item.handler';
import { HeroKilledDragonHandler } from './hero-killed-dragon.handler';
import { HeroesGameService } from './heros-game.service';
import { HeroesGameSaga } from './heroes-game.saga';
import { HeroRepository } from './hero.repository';
import { Module } from '@nestjs/common';

export const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];
export const EventHandlers = [HeroKilledDragonHandler];

@Module({
    imports: [CqrsModule],
    controllers: [],
    providers: [
        HeroesGameService,
        HeroesGameSaga,
        ...CommandHandlers,
        ...EventHandlers,
        HeroRepository,
    ],
    exports: [HeroesGameService],
})
export class HeroesGameModule {}
