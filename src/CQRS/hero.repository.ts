import { Hero } from './hero.model';

export class HeroRepository {
    findOneById(heroId: number) {
        const hero = new Hero('' + heroId);
        return hero;
    }
}
