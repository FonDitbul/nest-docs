import { KillDragonCommand } from './kill-dragon.command';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HeroRepository } from './hero.repository';
import { Hero } from './hero.model';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    constructor(
        private repository: HeroRepository,
        private readonly publisher: EventPublisher,
    ) {}

    async execute(command: KillDragonCommand) {
        const { heroId, dragonId } = command;

        const HeroModel = this.publisher.mergeClassContext(Hero);
        const hero = new HeroModel('id');

        console.log('kill Drangon Handler');
        hero.killEnemy(dragonId);
        hero.commit();

        // await this.repository.persist(hero);
    }
}
