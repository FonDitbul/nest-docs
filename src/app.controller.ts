import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesGameService } from './CQRS/heros-game.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly heroService: HeroesGameService,
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    killDragon() {
        this.heroService.killDragon('ddd', {
            heroId: '1',
            dragonId: '1',
        });
    }

    @Get('/heroes')
    findAllHero() {
        return this.heroService.findAll();
    }
}
