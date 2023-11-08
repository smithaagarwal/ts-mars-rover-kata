import { checkGridCordinates, createPlateau } from "./plateau";
import * as fs from "fs";
import * as path from "path";
import {
  checkRoverInputDirection,
  checkRoverPositionAgainstPlateau,
  createRover,
  direction,
} from "./rover";
import { moveRoversOnPlateau } from "./plateau";
import { isInstructionSetValid } from "./instruction";

export const main = () => {
  const filePath = path.join(__dirname, "..", "inputOutOfBound.txt");
  const file = fs.readFileSync(filePath, "utf-8");
  const fileContents = file.split(/\r?\n/);
  const gridSize = fileContents[0].split(" ");
  const gridX = Number(gridSize[0]);
  const gridY = Number(gridSize[1]);
  if (checkGridCordinates(gridX, gridY)) {
    const plateau = createPlateau(gridX, gridY);
    // -- plateau created --
    const rover1Position = fileContents[1].split(" ");
    const instructionForRover1 = fileContents[2];
    const rover1Dir = rover1Position[2];
    const rover1X = Number(rover1Position[0]);
    const rover1Y = Number(rover1Position[1]);
    if (
      checkRoverInputDirection(rover1Dir) &&
      checkRoverPositionAgainstPlateau(rover1X, rover1Y, plateau) &&
      isInstructionSetValid(instructionForRover1)
    ) {
      const rover1 = createRover(
        rover1X,
        rover1Y,
        rover1Dir as direction,
        instructionForRover1
      );
      plateau.rovers.push(rover1);
    } else
      console.log(
        `Invalid rover details - ${rover1X} ${rover1Y} ${rover1Dir} with instruction ${instructionForRover1}`
      );

    const rover2Position = fileContents[3].split(" ");
    const rover2Dir = rover2Position[2];
    const rover2X = Number(rover2Position[0]);
    const rover2Y = Number(rover2Position[1]);
    const instructionForRover2 = fileContents[4];
    if (
      checkRoverInputDirection(rover2Dir) &&
      checkRoverPositionAgainstPlateau(rover2X, rover2Y, plateau) &&
      isInstructionSetValid(instructionForRover2)
    ) {
      const rover2 = createRover(
        rover2X,
        rover2Y,
        rover2Dir as direction,
        instructionForRover2
      );
      plateau.rovers.push(rover2);
    } else
      console.log(
        `Invalid rover details - ${rover2X} ${rover2Y} ${rover2Dir} with instruction ${instructionForRover2}`
      );

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
  } else console.log("Invalid plateau coordinates");
};

main();
