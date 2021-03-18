function SmallAndBigt(array){
    array.sort((a,b)=>a-b);
    console.log(array);
    return [ array[0], array[array.length-1]];
}
console.log(SmallAndBigt([14, 35, 6, 1, 34, 54]));

function oddishOrEvenish(num) {
    const suma =(acumulador,item)=> parseInt(acumulador)+ parseInt(item) ;
    return ((num.toString().split('').reduce(suma))%2===0)?'Evenish':'Oddish';
}
console.log(oddishOrEvenish(4433));

function binary(decimal) {
	return parseInt(decimal).toString(2);
}

console.log(binary(5));

function triangle(n) {
    return (n*(n+1))/2;
}

console.log(triangle(215));

function areaOfCountry(name, area) {
    const ar= (area*100)/148940000;
	return `${name} is ${ar.toFixed(2)}% of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242));