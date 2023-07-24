You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

- The building blocks are cubes  
- The structure is built in layers  
- The top layer is a single block  
- A block in an upper layer must be supported by four blocks in a lower layer  
- A block in a lower layer can support more than one block in an upper layer  
- You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

**Tasks**

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided  

explicit rules:  
1. the very top layer is always a single block  
2. A block must be supported by 4 blocks underneath it
3. no gaps in the blocks

implicit rules:
1. the blocks are all the same size
2. build tallest valid structure
3. count remaining blocks

**Discussion**
- Input: integer for a specific amount of cubes
- Output: integer for left over cubes after building tallest possible valid structure

Explicit Rules

- Structures are built with blocks
  - Blocks are cubes
  - Cubes are six-sided, have square faces, and have equal lengths on all sides
- The top layer in the structure consists of a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- Layers are solid structures -- there are no gaps between blocks in a layer  

--Implicit Rules--

- Layer number correlates with blocks in a layer
  - Layer number x Layer number = number of blocks in layer

  --Questions--

- Can we add more blocks to a layer than is necessary to support the layer above and that layer still be valid?
- Will there always be left-over blocks?

**Data Structures**  
1. number value to calculate remaining cubes
2. number val to keep track of used cubes

**Step 4: Algorithm**
1. take in number of cubes
2. set useCubes to zero
3. while useCubes is less than or equal to inputted cubes  
    - iterate i representing layer level starting from 1 
    - add i squared to useCubes 
4. subtract useCubes from inputted cubes
5. return result of difference