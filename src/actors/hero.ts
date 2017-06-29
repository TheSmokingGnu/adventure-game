import {Actor, Engine, SpriteSheet, Texture} from 'excalibur';
import {Direction} from '../actor-attributes/direction';
/**
 * Main character in the adventure
 * @class Hero
 */
export class Hero extends Actor {
    public direction: Direction;
    public texture: Texture;
    /**
     * Initialise the main character
     * @constructor
     * @param message {Direction} cardinal direction
     */
    constructor(direction: Direction) {
        super();
        this.texture = new Texture('/assets/tx/player-idle.png');
        this.direction = direction;
        this.vel.x = 5;
        this.vel.y = 5;
    }

    public addHeroToScreen(game: Engine) {
        const playerIdleSheet = new SpriteSheet(this.texture, 5, 1, 32, 32);
        const playerIdleAnimation = playerIdleSheet
                                        .getAnimationForAll(game, 20000);
        this.addDrawing('idle', playerIdleAnimation);
    }
}
