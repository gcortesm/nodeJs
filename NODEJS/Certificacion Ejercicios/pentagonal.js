/**
 * Pentagonal Number.
 * Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center 
 * dot on the Nth iteration. In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. 
 * On the third, there are 16 dots, and on the fourth there are 31 dots.
 * https://edabit.com/challenge/wmdanmJkaT9waTg3y
 * 
 * @param num 
 * @returns 
 */
 function pentagonal(num){

    return (5*(num*num) - 5*num +2)/2;
}
console.log(pentagonal(3));

console.log(pentagonal(1));
