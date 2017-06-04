import {Direction} from '../actor-attributes/direction';
/**
 * Main character in the adventure
 * @class Hero
 */
export class Hero {
    public direction: Direction;
    /**
     * Initialise the main character
     * @constructor
     * @param message {Direction} cardinal direction
     */
    constructor(message: Direction) {
        this.direction = message;
    }
}
