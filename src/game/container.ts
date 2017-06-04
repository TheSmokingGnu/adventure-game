import {Engine} from 'excalibur';

/**
 * Set up a blank canvas
 * @class Container
 */
export class Container {
    private static readonly WIDTH = 500;
    private static readonly HEIGHT = 500;
    public game: Engine;

    /**
     * Return a new Engine that sets up the blank container
     */
    constructor() {
        this.game = new Engine({height: Container.WIDTH,
                                width: Container.HEIGHT});
    }
}
