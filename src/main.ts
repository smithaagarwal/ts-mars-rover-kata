import { createPlateau } from "./plateau";
import * as fs from "fs";
import * as path from "path";
import { createRover, direction } from "./rover";
import { moveRoversOnPlateau } from "./plateau";

export const main = () => {
  const filePath = path.join(__dirname, "..", "inputOutOfBound.txt");
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

  plateau.rovers.forEach((rover) => {
    if (rover.errorMessage !== undefined && rover.errorMessage.length > 0) {
      console.log(
        "Rover moved till",
        rover.currentPosition.x,
        " ",
        rover.currentPosition.y,
        " ",
        rover.currentPosition.facingDirection,
        ".",
        rover.errorMessage
      );
    } else
      console.log(
        rover.currentPosition.x,
        " ",
        rover.currentPosition.y,
        " ",
        rover.currentPosition.facingDirection
      );
  });
};

main();
