const redundant = (function(x){
    return function f1(){
        return x;
    };
});
console.log(redundant('otro'));
console.log(redundant('otro')());
