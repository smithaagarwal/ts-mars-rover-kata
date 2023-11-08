import { plateau } from "../src/plateau";
import {
  checkRoverInputDirection,
  checkRoverPositionAgainstPlateau,
  createRover,
} from "../src/rover";

const actualPlateau: plateau = {
  plateauArea: {
    maxX: 5,
    maxY: 5,
    minX: 0,
    minY: 0,
  },
  rovers: [],
};

const actualPlateaueWithRovers: plateau = {
  plateauArea: {
    maxX: 10,
    maxY: 10,
    minX: 0,
    minY: 0,
  },
  rovers: [
    {
      initialPosition: {
        x: 2,
        y: 3,
        facingDirection: "W",
      },
      currentPosition: {
        x: 0,
        y: 3,
        facingDirection: "W",
      },
      roverInstruction: "MM",
    },
    {
      initialPosition: {
        x: 1,
        y: 3,
        facingDirection: "N",
      },
      currentPosition: {
        x: 1,
        y: 3,
        facingDirection: "W",
      },
      roverInstruction: "LMLMLMLMM",
    },
  ],
};

describe("test function checkRoverPositionAgainstPlateau", () => {
  it("returns true, if the rover coordinates are within the plateau", () => {
    expect(checkRoverPositionAgainstPlateau(3, 5, actualPlateau)).toBe(true);
  });
  it("returns false, if the rover coordinates are within the plateau", () => {
    expect(checkRoverPositionAgainstPlateau(6, 5, actualPlateau)).toBe(false);
  });
  it("returns true, if the rover coordinates are within the plateau and no other rover is at that position", () => {
    expect(
      checkRoverPositionAgainstPlateau(3, 3, actualPlateaueWithRovers)
    ).toBe(true);
  });
  it("returns false, if the rover coordinates are within the plateau and there is a rover at that position", () => {
    expect(
      checkRoverPositionAgainstPlateau(0, 3, actualPlateaueWithRovers)
    ).toBe(false);
  });
});

describe("test function createRover", () => {
  it("should return a rover with position and instruction set as per the input received", () => {
    expect(createRover(1, 2, "N", "LMLMLMLMM")).toEqual({
      initialPosition: {
        x: 1,
        y: 2,
        facingDirection: "N",
      },
      currentPosition: {
        x: 1,
        y: 2,
        facingDirection: "N",
      },
      roverInstruction: "LMLMLMLMM",
    });
  });
});

describe("test function checkRoverInputDirection", () => {
  it("returns true if direction is either N, S , E or W", () => {
    expect(checkRoverInputDirection("N")).toBe(true);
  });
  it("returns true if direction is either N, S , E or W", () => {
    expect(checkRoverInputDirection("W")).toBe(true);
  });
  it("returns false if direction is not one of N, S , E or W", () => {
    expect(checkRoverInputDirection("North")).toBe(false);
  });
  it("returns false if direction is not one of N, S , E or W", () => {
    expect(checkRoverInputDirection("D")).toBe(false);
  });
});
