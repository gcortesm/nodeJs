/**
 * Get the Area of a Country:
 * Create a function that takes a country's name and its area as arguments and returns the area of the country's 
 * proportion of the total world's landmass.
 * https://edabit.com/challenge/ejfdLAp673DwxSg5R
 * @param name 
 * @param area 
 * @returns 
 */
 function areaOfCountry(name, area){
    let porcentaje = `${name} is ${(area/148940000 * 100).toFixed(2)}% of the total world's landmass`;
    return porcentaje;
}

console.log(areaOfCountry("USA",9372610));

console.log(areaOfCountry("Russia",17098242));
