function milesToKm(miles){
    const kilometers = miles*1.609
    return kilometers;
}
const miles = 2;
const kilometers = milesToKm(miles);
console.log(kilometers);