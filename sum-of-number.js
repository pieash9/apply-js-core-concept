function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
let SumResult = sumOfNumbers(4);
console.log(SumResult);
