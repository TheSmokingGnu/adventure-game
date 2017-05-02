import "jasmine";
import { Direction } from "../../src/actor-attributes/direction";
import { Hero } from "../../src/actors/hero";

it("should be truthy", () => {
    expect(new Hero(Direction.down).direction).toEqual(Direction.down);
})
;
