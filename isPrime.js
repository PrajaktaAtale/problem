// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// //check if number is equal to 1
// if(number === 1){
//     console.log(`${number} is not a prime nor composite number`);
// }

// //check if number is greater than 1
// else if (number > 1){
//      //looping througth 2 to number -1
//      for(let i = 2; i < number; i++){
//         if(number % i === 0){
//             isPrime = false;
//             break;
//         }
//      }
//      if(isPrime){
//         console.log(`${number} is a prime number`);
//      }
//      else{
//         console.log(`${number} is not a prime number`);
//      }
// }

// //check if number is less than 1
// else{
//     console.log(`${number} is not a prime number`);
// }


for(let i = 2; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + " is not Prime number");
    }else{
        console.log(i + " is Prime number");
    }
}