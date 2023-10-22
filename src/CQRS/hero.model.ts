import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero-killed-dragon.event';

export class Hero extends AggregateRoot {
    constructor(private id: string) {
        super();
        this.autoCommit = true;
    }

    /**
     * First line
     *
     * 적을 죽였을때 나오는 메소드 야
     *
     * Second line
     */
    killEnemy(enemyId: string) {
        // Business logic
        console.log('killEnemy');
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }
}
