// function factorial(numbers){
//     let factorial=1;
//     for(let i =numbers;i>=1;i--){
//         factorial=factorial*i;
//         console.log(i,factorial);
//     }
//     return factorial;
// }
// console.log(factorial(7));

// hour to minute
// function hourToMinute(hour){
//     let minuteValue = hour*60;
//     return minuteValue;
// }
// let MinResult = hourToMinute(13);
// console.log(MinResult,"minutes");

// leap year from an array

// function leapYearFromArray(years) {
//   let leapYearArray = [];
//   for (let i = 0; i < years.length; i++) {
//     let yearsElement = years[i];
//     if(yearsElement %400===0 ||(yearsElement % 100 !== 0 && yearsElement %4===0)){
//         leapYearArray.push(yearsElement);
//     }
    
//   }
//   return leapYearArray;
// }
// let years = [2023, 2024, 2025, 2028, 2030];
// let leapYearArray = leapYearFromArray(years);
// console.log(leapYearArray);


// odd sum 

function findOddSum(numbers){
    let sumOfOdd=0;
    for(let i=0;i<numbers.length;i++){
        let element = numbers[i];
        if(element%2==1){
            sumOfOdd = sumOfOdd+element;
        }
    }
    return sumOfOdd;
}
let numbers =[5, 7, 8, 10, 45, 30,123];
let finalResult = findOddSum(numbers);
console.log(finalResult);