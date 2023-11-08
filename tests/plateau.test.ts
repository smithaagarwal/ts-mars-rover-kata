import { checkGridCordinates, createPlateau, moveRoversOnPlateau, plateau } from "../src/plateau";
import { direction } from "../src/rover";

describe("test checkGridCordinates function to see if the grid values passed by used is valid", () => {
  it("returns true if numbers greater than 0 are passed ", () => {
    expect(checkGridCordinates(5, 5)).toBe(true);
  });
  it("returns true if numbers greater than 0 are passed ", () => {
    expect(checkGridCordinates(10.5, 10.5)).toBe(true);
  });
  it("returns false if numbers lesser than 0 are passed ", () => {
    expect(checkGridCordinates(-1, 5)).toBe(false);
  });
});

const expectedPlateau: plateau = {
  plateauArea: {
    maxX: 5,
    maxY: 5,
    minX: 0,
    minY: 0,
  },
  rovers: [],
};

describe("test createPlateau to verify plateau with the given grid coordinates is created ", () => {
  it("should return a plateau with grid coordinates that are passed", () => {
    expect(createPlateau(5, 5)).toEqual(expectedPlateau);
  });
});

describe("test function moveRoversOnPlateau", () => {
    it("should execute the instructions for one  rover on the plateau", () => {
        const actualPlateau = createPlateauTestDataWithSingleRover(
            5,
            5,
            1,
            2,
            "N",
            "LMLMLMLMM"
        );
        moveRoversOnPlateau(actualPlateau);
        expect(actualPlateau.rovers[0].currentPosition).toEqual({
            x: 1,
            y: 3,
            facingDirection: "N",
        });
    });
});
const createPlateauTestDataWithSingleRover = (
    gridX: number,
    gridY: number,
    roverX: number,
    roverY: number,
    roverDirection: direction,
    roverInstructionSet: string
): plateau => {
    return {
        plateauArea: {
            maxX: gridX,
            maxY: gridY,
            minX: 0,
            minY: 0,
        },
        rovers: [
            {
                initialPosition: {
                    x: roverX,
                    y: roverY,
                    facingDirection: roverDirection,
                },
                currentPosition: {
                    x: roverX,
                    y: roverY,
                    facingDirection: roverDirection,
                },
                roverInstruction: roverInstructionSet,
            },
        ],
    };
};

