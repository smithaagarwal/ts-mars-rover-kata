import { checkGridCordinates, createPlateau, plateau } from "../src/plateau";

describe("test checkGridCordinates function to see if the grid values passed by used is valid", () => {
  it("returns true if numbers greater than 0 are passed ", () => {
    expect(checkGridCordinates(5, 5)).toBe(true);
  });
  it("returns true if numbers greater than 0 are passed ", () => {
    expect(checkGridCordinates(10.5, 10.5)).toBe(true);
  });
  it("returns false if numbers lesser than 0 are passed ", () => {
    expect(checkGridCordinates(-1, 5)).toBe(false);
  });
});

const expectedPlateau: plateau = {
  plateauArea: {
    maxX: 5,
    maxY: 5,
    minX: 0,
    minY: 0,
  },
  rovers: [],
};

describe("test createPlateau to verify plateau with the given grid coordinates is created ", () => {
  it("should return a plateau with grid coordinates that are passed", () => {
    expect(createPlateau(5, 5)).toEqual(expectedPlateau);
  });
});
