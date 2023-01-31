// function SumOfArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index, element,sum);
//   }
//   return sum;

// }
// let numbers = [12, 13, 14, 15, 16];
// let oddSumOfArray = SumOfArray(numbers);

// function sumOfOddInArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if (element % 2 != 0) {
//       sum = sum + element;
//     }
//     continue;
//   }
//   return sum;
// }
// let numbers = [1,2,3,4,5,6,7,8,9,111,1,2,56];
// let ArraySum=sumOfOddInArray(numbers);
// console.log('Sum of odd number in array:',ArraySum);
function sumOfArray(number2){
    let sum = 0;
    for(let i =0;i<number2.length;i++){
        sum=sum+number2[i];
    }
    return sum;
  }
function sumOfOddNumbers(numbers) {
  let oddNumber = [];

 
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    // console.log(index, element);
    if (element % 2 !== 0) {
      oddNumber.push(element);
    }
  }
  return oddNumber;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumberArray = sumOfOddNumbers(numbers);
// let sumofOdd = sumOfOddNumbers(oddNumberArray);
// console.log(oddNumberArray);
console.log(oddNumberArray);
let finalResult = sumOfArray(oddNumberArray);
console.log(finalResult);