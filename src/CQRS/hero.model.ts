import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero-killed-dragon.event';

export class Hero extends AggregateRoot {
    constructor(private id: string) {
        super();
        this.autoCommit = true;
    }
    killEnemy(enemyId: string) {
        // Business logic
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
        console.log('killEnemy');
    }
}