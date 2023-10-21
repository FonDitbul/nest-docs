import { DropAncientItemCommand } from './drop-ancient-item.command';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../hero.repository';
import * as clc from 'cli-color';

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler
    implements ICommandHandler<DropAncientItemCommand>
{
    constructor(
        private readonly repository: HeroRepository,
        private readonly publisher: EventPublisher,
    ) {}

    async execute(command: DropAncientItemCommand) {
        console.log(clc.yellowBright('Async DropAncientItemCommand...'));

        const { heroId, itemId } = command;
        const hero = this.publisher.mergeObjectContext(
            await this.repository.findOneById(+heroId),
        );
        // hero.addItem(itemId);
        hero.commit();
    }
}
