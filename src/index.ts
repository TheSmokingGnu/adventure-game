import {Engine, Loader} from 'excalibur';
import {Direction} from './actor-attributes/direction';
import {Hero} from './actors/hero';
import {Container} from './game/container';
/**
 * Entry point for the app.  Don't put any logic in here.
 */
const game: Engine = new Container().game;
const hero = new Hero(Direction.down);

const loader = new Loader();
loader.addResource(hero.texture);

game.start(loader).then( () => {
    hero.addHeroToScreen(game);
    game.add(hero);
});
