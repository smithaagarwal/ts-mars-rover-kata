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
  const mars: plateau = {
    plateauArea: {
      maxX: x,
      maxY: y,
      minX: 0,
      minY: 0,
    },
    rovers: [],
  };
  return mars;
};
