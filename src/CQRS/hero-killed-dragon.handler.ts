import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero-killed-dragon.event';
import { HeroRepository } from './hero.repository';
import * as console from 'console';

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
    implements IEventHandler<HeroKilledDragonEvent>
{
    constructor(private readonly repository: HeroRepository) {}

    handle(event: HeroKilledDragonEvent) {
        //logic
        console.log(event);
        console.log('kill Dragon??');
    }
}
