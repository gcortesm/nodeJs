

/**
 * 
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 * 
 * 
 * 
 *  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 *
 *  minMax([2334454, 5]) ➞ [5, 2334454]
 *
 *  minMax([11]) ➞ [11, 11]
 * 
 */


 var arr =   [1,4,2,6,13];
 
 function minMax(arr) {
   var length = arr.length;
   let ma = 0 ;
   let mi = 0 ; 
   if ( length ===1    ) {
          return [arr[0],arr[0]]; 
        } 
   if (length>1) {
     ma = Math.max (...arr);  
     mi = Math.min (...arr);  
     return  [mi,ma];
   } 
   return  "No Contemplado" 
 }
 console.log(minMax(arr));
 
 
 
 //--------------------------------------------------------------------------------------------
  
 
 /**
  * 
  * Write a function redundant that takes in a string str and returns a function that returns str.
             Examples
             const f1 = redundant("apple")
             f1() ➞ "apple"
             const f2 = redundant("pear")
             f2() ➞ "pear"
             const f3 = redundant("")
             f3() ➞ ""
  * 
  * 
  * 
  *   
  */
 
 const redundant = (function(x){
     return function f1(){
         return x;
     };
 });
 
 
 
 
 //-----------------------------------------------------------------------------------
 
 
 /**
  * 
  * Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
                         Examples
                         derivative(1, 4) ➞ 1
                         derivative(3, -2) ➞ 12
                         derivative(4, -3) ➞ -108
  * 
  * 
  * 
  */
 
 // Derivada de una función f(x) = x^b
 
 const derivative = (b, m) => {
     return b * Math.pow(m, b - 1);
 };
 
 
 
 
 
 //--------------------------------------------------------------------------------------------------------
 
 
 
 /**
  * Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
 For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
                         Examples
                         oddishOrEvenish(43) ➞ "Oddish"
                         // 4 + 3 = 7
                         // 7 % 2 = 1
                         oddishOrEvenish(373) ➞ "Oddish"
                         // 3 + 7 + 3 = 13
                         // 13 % 2 = 1
                         oddishOrEvenish(4433) ➞ "Evenish"
                         // 4 + 4 + 3 + 3 = 14
                         // 14 % 2 = 0
  * 
  * 
  * 
  */
 
 
  // Oddish vs Evenish
 const oddishOrEvenish = number => {
     let sum = 0;
     let numberToString = number + "";
     for(let i = 0; i < numberToString.length; i++){
         sum += parseInt(numberToString.charAt(i));
     }
     if(sum % 2 === 0) {
         return "Evenish";
     }
     return "Oddish";
 }