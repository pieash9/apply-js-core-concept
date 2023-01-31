function inchToFeet(inches){
    const feet=inches/12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('dada inches:',dadaFeet);

const naniInches = 66;
const naniFeet = inchToFeet(naniInches);
console.log(naniFeet);