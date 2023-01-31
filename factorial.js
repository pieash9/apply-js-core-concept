// function factorial(number){
//     let result = 1;
//     for(let i=number;i>=1;i--){
//         result = result*i;
//     }
//     return result;
// }
// console.log(factorial(7));


 function factorialWhile(number){
    let i=number;
    let result = 1;
    while(i >=1){
        result = result*i;
        i--;
    }
    console.log(result);
 }
 factorialWhile(3);