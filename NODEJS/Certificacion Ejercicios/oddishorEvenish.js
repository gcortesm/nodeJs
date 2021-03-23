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

let number = 101;
console.log(oddishOrEvenish(number));

number = 41;
console.log(oddishOrEvenish(number));