import { Hero } from './hero.model';

export class HeroRepository {
    findOneById(heroId: number) {
        const hero = new Hero('' + heroId);
        return hero;
    }

    findAll() {
        const heroList = [new Hero('1'), new Hero('2'), new Hero('3')];
        return heroList;
    }
}
