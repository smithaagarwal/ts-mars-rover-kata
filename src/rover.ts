import { plateau } from "./plateau";

export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type direction = (typeof DIRECTIONS)[number];
export interface position {
  x: number;
  y: number;
  facingDirection: direction;
}
export interface rover {
  initialPosition: position;
  currentPosition: position;
  roverInstruction: string;
  message?: string;
}

export const checkRoverPositionAgainstPlateau = (
  x: number,
  y: number,
  mars: plateau
): boolean => {
  return (
    x <= mars.plateauArea.maxX &&
    y <= mars.plateauArea.maxY &&
    x >= mars.plateauArea.minX &&
    y >= mars.plateauArea.minY
  );
};

export const checkRoverInputDirection = (
  inputRoverDirection: string
): boolean => {
  return (DIRECTIONS as ReadonlyArray<String>).includes(inputRoverDirection);
};

export const createRover = (
  xCoordinate: number,
  yCoordinate: number,
  facingDir: direction,
  roverInstruction: string
): rover => {
  return {
    initialPosition: {
      x: xCoordinate,
      y: yCoordinate,
      facingDirection: facingDir,
    },
    currentPosition: {
      x: xCoordinate,
      y: yCoordinate,
      facingDirection: facingDir,
    },
    roverInstruction: roverInstruction,
  };
};
