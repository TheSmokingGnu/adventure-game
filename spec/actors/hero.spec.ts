import {Animation, Engine} from 'excalibur';
import 'jasmine';
import { Direction } from '../../src/actor-attributes/direction';
import { Hero } from '../../src/actors/hero';

it('should be truthy', () => {
    const hero = new Hero(Direction.down);

    expect(hero.direction).toEqual(Direction.down);
});

it('should add an animation', () => {
    const hero = new Hero(Direction.down);
    hero.addHeroToScreen(new Engine());

    expect(hero.currentDrawing)
        .toEqual(jasmine.any(Animation));
});
