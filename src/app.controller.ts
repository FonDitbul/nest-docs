import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesGameService } from './CQRS/heros-game.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly heroService: HeroesGameService,
    ) {}

    /**
     * Supported comment
     */
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    /**
     * @param {string} target  The target to process
     * @returns The processed target number
     */
    @Post()
    killDragon() {
        this.heroService.killDragon('ddd', {
            heroId: '1',
            dragonId: '1',
        });
    }

    /**
     * testestsetsetsetestststssssv
     *
     * findAll test
     * @param {string} target  The target to process
     * @returns string
     */
    @Get('/heroes')
    findAllHero(target: string) {
        return this.heroService.findAll();
    }
}
