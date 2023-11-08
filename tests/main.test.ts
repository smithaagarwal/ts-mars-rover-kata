import { moveRoversOnPlateau } from "../src/main";
import { createPlateau, plateau } from "../src/plateau";
import { createRover, direction } from "../src/rover";
import * as fs from "fs";

describe.only("Read input", () => {
  it("should read input and test rover movements", () => {
    console.log(__dirname);
    const file = fs.readFileSync(`${__dirname}\\input.txt`, "utf-8");
    const fileContents = file.split(/\r?\n/);
    const gridSize = fileContents[0].split(" ");
    const plateau = createPlateau(Number(gridSize[0]), Number(gridSize[1]));
    // -- plateau created --

    const rover1Position = fileContents[1].split(" ");
    const instructionForRover1 = fileContents[2];
    const rover1 = createRover(
      Number(rover1Position[0]),
      Number(rover1Position[1]),
      rover1Position[2] as direction,
      instructionForRover1
    );
    const rover2Position = fileContents[3].split(" ");
    const instructionForRover2 = fileContents[4];
    const rover2 = createRover(
      Number(rover2Position[0]),
      Number(rover2Position[1]),
      rover2Position[2] as direction,
      instructionForRover2
    );
    // -- rover created --

    // add rover to plateau
    plateau.rovers.push(rover1);
    plateau.rovers.push(rover2);

    // move rover
    moveRoversOnPlateau(plateau);

    // output
    expect(plateau.rovers[0].currentPosition).toEqual({
      x: 1,
      y: 3,
      facingDirection: "N",
    });
    expect(plateau.rovers[1].currentPosition).toEqual({
      x: 5,
      y: 1,
      facingDirection: "E",
    });
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
