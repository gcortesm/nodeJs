
/** 
 * Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
 * To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
 * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will 
 * be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
 * https://edabit.com/challenge/3kcrnpHk7krNZdnKK
 * @param decimal 
 * @returns 
 */
 function binary(decimal){
    let decimalEnBinario = decimal.toString(2); // A la base 2
    return decimalEnBinario;  
}
console.log(binary(0));

  