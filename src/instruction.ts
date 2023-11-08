import { plateau } from "./plateau";
import { checkRoverPositionAgainstPlateau, rover } from "./rover";

const INSTRUCTIONS = ["L", "R", "M"] as const;
type instruction = (typeof INSTRUCTIONS)[number];
const INCREMENT_STEPS_BY = 1;

export const isInstructionValid = (instructionForRover: string): boolean => {
  let regEx = /^[LRM\s]+$/;
  return regEx.test(instructionForRover);
};

export const turnRoverLeft = (marsRover: rover) => {
  switch (marsRover.currentPosition.facingDirection) {
    case "N":
      marsRover.currentPosition.facingDirection = "W";
      break;
    case "W":
      marsRover.currentPosition.facingDirection = "S";
      break;
    case "S":
      marsRover.currentPosition.facingDirection = "E";
      break;
    case "E":
      marsRover.currentPosition.facingDirection = "N";
      break;
  }
};

export const turnRoverRight = (marsRover: rover) => {
  switch (marsRover.currentPosition.facingDirection) {
    case "N":
      marsRover.currentPosition.facingDirection = "E";
      break;
    case "W":
      marsRover.currentPosition.facingDirection = "N";
      break;
    case "S":
      marsRover.currentPosition.facingDirection = "W";
      break;
    case "E":
      marsRover.currentPosition.facingDirection = "S";
      break;
  }
};

export const moveRover = (marsRover: rover, mars: plateau) => {
  let xCoordinate = marsRover.currentPosition.x;
  let yCoordinate = marsRover.currentPosition.y;
  switch (marsRover.currentPosition.facingDirection) {
    case "N":
      yCoordinate += INCREMENT_STEPS_BY;
      break;
    case "S":
      yCoordinate -= INCREMENT_STEPS_BY;
      break;
    case "E":
      xCoordinate += INCREMENT_STEPS_BY;
      break;
    case "W":
      xCoordinate -= INCREMENT_STEPS_BY;
      break;
  }

  if (checkRoverPositionAgainstPlateau(xCoordinate, yCoordinate, mars)) {
    marsRover.currentPosition.x = xCoordinate;
    marsRover.currentPosition.y = yCoordinate;
  } else {
    marsRover.message = `Cannot move rover to out of bound coordinates (${xCoordinate}, ${yCoordinate}).`;
  }
};
