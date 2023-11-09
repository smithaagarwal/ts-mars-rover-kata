#   🚀👾Mars Rover Tech Task Assignment 👾 🚀

In this exercise, you will be working on the Mars Rover Tech Task. 👾 🚀

## Instructions for the task

👉Please read through the instructions carefully in the Mars Rover Tech Task 
👉 Please complete the tech task using TypeScript.
👉 Please approach this Kata using Test Driven Development.

## How to run this application
The input is provided to the application using an **input file** consisting of 

 - the plateau coordinates
 - rover positon with direction 
 - instructions to the rover

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```
To run the application **execute the command**:

```
npx ts-node src/main.ts
```
Expected **output**

```
1 3 N
5 1 E
```

###Key features of the solution
- Addresses only positive plateau coordinates
- Addresses movement of 2 rovers whose location is provided in the file
- Allows rover to be placed within plateau boundary limits and unoccupied coordinates (if there are more rovers)
- While moving a rover based on the instruction provided, if the instruction moves the rover beyond the plateau grid or on a coordinate occupied by a rover, a message is given stating rover can't move to that  particular coordinate and places the rover at the last successful coordinates

###Future Thoughts
- The application can be extended to take negative coordinates. Additional logic has to be added to mark the grid accordingly and update the constant INCREMENT_STEPS_BY 
- The program is able to handle any number of rovers. The logic for accepting more than 2 rovers from the input file has to be updated
- Presently the rover moves to the last possible location in a given instruction. If needed, the logic can be changed such that the rover stays in the initial position if the complete instruction places the rover outside the grid or on another rover
- The number of steps taken by a rover in each move can be changed
- Program can be extended to take input from the user.