import { executeRoverInstruction } from "./instruction";
import { rover } from "./rover";

interface grid {
  maxX: number;
  maxY: number;
  minX: 0;
  minY: 0;
}

export interface plateau {
  plateauArea: grid;
  rovers: rover[];
}

export const checkGridCordinates = (x: number, y: number): boolean => {
  return x > 0 && y > 0;
};

export const createPlateau = (x: number, y: number): plateau => {
  return {
    plateauArea: {
      maxX: x,
      maxY: y,
      minX: 0,
      minY: 0,
    },
    rovers: [],
  };
};

export const moveRoversOnPlateau = (mars: plateau) => {
  mars.rovers.forEach((rover) => {
    executeRoverInstruction(rover, mars);
  });
};
