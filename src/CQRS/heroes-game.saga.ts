import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroKilledDragonEvent } from './hero-killed-dragon.event';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map } from 'rxjs/operators';
import { DropAncientItemCommand } from './drop/drop-ancient-item.command';

const fakeItemID = '1';

@Injectable()
export class HeroesGameSaga {
    @Saga()
    dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(HeroKilledDragonEvent),
            map(
                (event) => new DropAncientItemCommand(event.heroId, fakeItemID),
            ),
        );
    };
}
