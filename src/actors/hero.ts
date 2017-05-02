import {Direction} from "../actor-attributes/direction";
export class Hero {
    public direction: Direction;
    constructor(message: Direction) {
        this.direction = message;
    }
}
