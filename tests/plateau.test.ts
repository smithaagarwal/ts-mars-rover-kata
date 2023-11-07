import { checkGridCordinates, plateau } from "../src/plateau";

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

const plateau1: plateau = {
  plateauArea: {
    maxX: 5,
    maxY: 5,
    minX: 0,
    minY: 0,
  },
  rovers: [],
};
