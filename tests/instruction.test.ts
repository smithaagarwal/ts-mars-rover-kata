import {
  executeRoverInstruction,
  isInstructionSetValid,
  moveRover,
  turnRoverLeft,
  turnRoverRight,
} from "../src/instruction";
import { plateau } from "../src/plateau";
import { direction, rover } from "../src/rover";

describe("test isInstructionSetValid function", () => {
  it("should return true if the instruction is valid with L R or M in it", () => {
    expect(isInstructionSetValid("LMLMLMLMM")).toBe(true);
  });
  it("should return true if the instruction is valid with L R or M in it", () => {
    expect(isInstructionSetValid("LMLMLMLSAM")).toBe(false);
  });
});

describe("test function turnRoverLeft", () => {
  it("should set rover direction to W if previously N", () => {
    const actualRoverFacingNorth = createRoverWithDirection("N");
    turnRoverLeft(actualRoverFacingNorth);
    expect(actualRoverFacingNorth.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "W",
    });
  });
  it("should set rover direction to E if previously S", () => {
    const actualRoverFacingSouth = createRoverWithDirection("S");
    turnRoverLeft(actualRoverFacingSouth);
    expect(actualRoverFacingSouth.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "E",
    });
  });
  it("should set rover direction to N if previously E", () => {
    const actualRoverFacingEast = createRoverWithDirection("E");

    turnRoverLeft(actualRoverFacingEast);
    expect(actualRoverFacingEast.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "N",
    });
  });
  it("should set rover direction to S if previously W", () => {
    const actualRoverFacingWest = createRoverWithDirection("W");

    turnRoverLeft(actualRoverFacingWest);
    expect(actualRoverFacingWest.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "S",
    });
  });
});

describe("test function turnRoverRight", () => {
  it("should set rover direction to E if previously N", () => {
    const actualRoverFacingNorth = createRoverWithDirection("N");

    turnRoverRight(actualRoverFacingNorth);
    expect(actualRoverFacingNorth.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "E",
    });
  });
  it("should set rover direction to W if previously S", () => {
    const actualRoverFacingSouth = createRoverWithDirection("S");

    turnRoverRight(actualRoverFacingSouth);
    expect(actualRoverFacingSouth.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "W",
    });
  });
  it("should set rover direction to S if previously E", () => {
    const actualRoverFacingEast = createRoverWithDirection("E");

    turnRoverRight(actualRoverFacingEast);
    expect(actualRoverFacingEast.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "S",
    });
  });
  it("should set rover direction to N if previously W", () => {
    const actualRoverFacingWest = createRoverWithDirection("W");

    turnRoverRight(actualRoverFacingWest);
    expect(actualRoverFacingWest.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "N",
    });
  });
});

describe("test function moveRover", () => {
  const expectedPlateau: plateau = {
    plateauArea: {
      maxX: 5,
      maxY: 5,
      minX: 0,
      minY: 0,
    },
    rovers: [],
  };
  it("should move rover by one step in N direction", () => {
    const actualRoverFacingNorth = createRoverWithDirection("N");

    moveRover(actualRoverFacingNorth, expectedPlateau);
    expect(actualRoverFacingNorth.currentPosition).toEqual({
      x: 1,
      y: 3,
      facingDirection: "N",
    });
  });
  it("should move rover by one step in S direction", () => {
    const actualRoverFacingSouth = createRoverWithDirection("S");

    moveRover(actualRoverFacingSouth, expectedPlateau);
    expect(actualRoverFacingSouth.currentPosition).toEqual({
      x: 1,
      y: 1,
      facingDirection: "S",
    });
  });
  it("should move rover by one step in E direction", () => {
    const actualRoverFacingEast = createRoverWithDirection("E");

    moveRover(actualRoverFacingEast, expectedPlateau);
    expect(actualRoverFacingEast.currentPosition).toEqual({
      x: 2,
      y: 2,
      facingDirection: "E",
    });
  });
  it("should move rover by one step in W direction", () => {
    const actualRoverFacingWest = createRoverWithDirection("W");

    moveRover(actualRoverFacingWest, expectedPlateau);
    expect(actualRoverFacingWest.currentPosition).toEqual({
      x: 0,
      y: 2,
      facingDirection: "W",
    });
  });

  it("should fail to move the rover with an error message", () => {
    const actualRoverFacingWest = createRoverWithDirection("W");

    moveRover(actualRoverFacingWest, expectedPlateau);
    moveRover(actualRoverFacingWest, expectedPlateau);
    expect(actualRoverFacingWest.currentPosition).toEqual({
      x: 0,
      y: 2,
      facingDirection: "W",
    });
    expect(actualRoverFacingWest.errorMessage).toEqual(
      "Cannot move rover to out of bound/occupied coordinates (-1, 2)."
    );
  });
});

describe("test function executeRoverInstruction", () => {
  it("should update the endPosition of the rover after executing the instruction", () => {
    const actualRover = creatRoverWithPositionAndInstruction(1, 1, "N", "M");
    const actualPlateau = createPlateauTestData(5, 5);
    executeRoverInstruction(actualRover, actualPlateau);
    expect(actualRover.currentPosition).toEqual({
      x: 1,
      y: 2,
      facingDirection: "N",
    });
  });
  it("should update the endPosition of the rover after executing the instruction given in rquirement doc", () => {
    const actualRover = creatRoverWithPositionAndInstruction(
      1,
      2,
      "N",
      "LMLMLMLMM"
    );
    const actualPlateau = createPlateauTestData(5, 5);
    executeRoverInstruction(actualRover, actualPlateau);
    expect(actualRover.currentPosition).toEqual({
      x: 1,
      y: 3,
      facingDirection: "N",
    });
  });

  it("should update the endPosition of the rover after executing the instruction given in rquirement doc", () => {
    const actualRover = creatRoverWithPositionAndInstruction(
      3,
      3,
      "E",
      "MMRMMRMRRM"
    );
    const actualPlateau = createPlateauTestData(5, 5);
    executeRoverInstruction(actualRover, actualPlateau);
    expect(actualRover.currentPosition).toEqual({
      x: 5,
      y: 1,
      facingDirection: "E",
    });
  });
});

describe("test function executeRoverInstruction with instruction that can't be fulfilled", () => {
  it("should update the endPosition of the rover to the last possible move and update error message for rover", () => {
    const actualRover = creatRoverWithPositionAndInstruction(0, 1, "W", "M");
    const actualPlateau = createPlateauTestData(5, 5);
    executeRoverInstruction(actualRover, actualPlateau);
    expect(actualRover.currentPosition).toEqual({
      x: 0,
      y: 1,
      facingDirection: "W",
    });
    expect(actualRover.errorMessage).toEqual(
      "Cannot move rover to out of bound/occupied coordinates (-1, 1)."
    );
  });

  it("should update the endPosition of the rover to the last possible move and update error message for rover", () => {
    const actualRover = creatRoverWithPositionAndInstruction(
      3,
      3,
      "E",
      "MMRMMRMRRMM"
    );
    const actualPlateau = createPlateauTestData(5, 5);
    executeRoverInstruction(actualRover, actualPlateau);
    expect(actualRover.currentPosition).toEqual({
      x: 5,
      y: 1,
      facingDirection: "E",
    });
    expect(actualRover.errorMessage).toEqual(
      "Cannot move rover to out of bound/occupied coordinates (6, 1)."
    );
  });
});

const createRoverWithDirection = (dir: direction) => {
  return {
    initialPosition: {
      x: 1,
      y: 2,
      facingDirection: dir,
    },
    currentPosition: {
      x: 1,
      y: 2,
      facingDirection: dir,
    },
    roverInstruction: "LMLMLMLMM",
    errorMessage: "",
  };
};

const creatRoverWithPositionAndInstruction = (
  xCoordinate: number,
  yCoordinate: number,
  dir: direction,
  inputInstruction: string
) => {
  return {
    initialPosition: {
      x: xCoordinate,
      y: yCoordinate,
      facingDirection: dir,
    },
    currentPosition: {
      x: xCoordinate,
      y: yCoordinate,
      facingDirection: dir,
    },
    roverInstruction: inputInstruction,
    errorMessage: "",
  };
};

const createPlateauTestData = (
  xCoordinate: number,
  yCoordinate: number
): plateau => {
  return {
    plateauArea: {
      maxX: xCoordinate,
      maxY: yCoordinate,
      minX: 0,
      minY: 0,
    },
    rovers: [],
  };
};
