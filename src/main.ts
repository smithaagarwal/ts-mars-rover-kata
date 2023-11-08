import { executeRoverInstruction } from "./instruction"
import { plateau } from "./plateau"

export const moveRoversOnPlateau= (mars:plateau)=> {
    mars.rovers.forEach((rover)=> {
        executeRoverInstruction(rover,mars);
    })
}