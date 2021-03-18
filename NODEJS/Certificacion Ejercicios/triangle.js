/**
 * Triangular Number Sequence.
 * Write a function that gives the number of dots with its corresponding triangle number
 * of the sequence.
 * This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
 * The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15 This means that the first triangle has just one dot, 
 * the second one has three dots, the third one has 6 dots and so on. Write a function that gives the number of dots with its 
 * corresponding triangle number of the sequence.
 * https://edabit.com/challenge/RMZiERz2cbjmbXruY
 * @param n 
 * @returns 
 */
 function triangle(n){
    return (n*(n+1))/2;
}
console.log(triangle(10));

console.log(triangle(2));

