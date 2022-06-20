// function findOddEven(arr){
//     let odd = [];
//     let even = [];
//     let j = 0;
//     let k = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             even[j++] = arr[i]
//         }else{
//             odd[k++] = arr[i]
//         }
//     }
//     console.log("Even Number", even)
//     console.log("Odd Number", odd);
// }
// findOddEven([2, 3, 4, 26, 17, 7])


for(let i=0; i<=15; i++){
    if(i%2 === 0){
        console.log(i + " is Even");
    }else{
        console.log(i + " is Odd");
    }
}