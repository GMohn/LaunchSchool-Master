Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

*Input* an array of strings
*output* a new array of sorted strings by
**Explicit rules**  
1. Sort strings in new array
2. sort by highest adjacent consonants
3. maintain original order if same number of adjacent consonants
4. adjacent if next to each other in same word or space between adajcent words

**Implicit Rules**
1. Original array is not mutated
2. the ending index of string should be compared with start index of proceeding string
3. strings can contain multiple words

**Questions**
- what is a consonant?
- are spaces their own element in the array?
- are there other punctuation marks?
- If two words share an adjacent consonant, do both of their counts increase? 

**Algorithm**
1. Take in Array of strings.
2. calculate adj consonants and give property value to string
  - loop through each string comparing adjacent indices
3. sort strings by number of adjacent consonants
4. return array