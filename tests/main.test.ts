import { moveRoversOnPlateau } from "../src/plateau";
import { createPlateau } from "../src/plateau";
import { createRover, direction } from "../src/rover";
import * as fs from "fs";
import * as path from "path";

describe("Read input from file", () => {
  it("should read input and test rover movements", () => {
    const filePath = path.join(__dirname, "..", "input.txt");
    const file = fs.readFileSync(filePath, "utf-8");
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
