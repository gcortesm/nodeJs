 
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

var arr =   [1,4,2,6,13];
console.log(minMax(arr));

arr = [1,2,3,4,5,6]
console.log(minMax(arr));


function minMaxObservacion(arr) {
    return [Math.min (...arr),Math.max (...arr)];
}

arr =   [1];
console.log(minMaxObservacion(arr));

arr = [1,2,3,4,5,6]
console.log(minMaxObservacion(arr));
