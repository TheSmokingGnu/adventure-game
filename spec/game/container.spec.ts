import {Container} from '../../src/game/container';

it('should create a game area 500 width', () => {
    expect(new Container().game.canvasWidth).toBe(500);
});

it('should create a game area 500 height', () => {
    expect(new Container().game.canvasHeight).toBe(500);
});
