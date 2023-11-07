export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type direction = (typeof DIRECTIONS)[number];
export interface position {
  x: number;
  y: number;
  facingDirection: direction;
}
export interface rover {
  startPosition: position;
  endPosition: position;
  roverInstruction: string;
  message: string;
}
