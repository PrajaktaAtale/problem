// let a = [1, 2, 3, 4]
// for(let i=0; i < a.length; i=i+2){
//     let temp = a[i]
//     a[i] = a[i+1],
//     a[i+1] = temp
   
// }
// console.log(a);

// WAP to swap two numbers without using a third variable
let x= 2;
let y= 3;
x= x+y;
console.log(x);
y= x-y;
console.log(y);
x= x-y;
console.log(x);
console.log("After swapping x: "+x+ " And " + " After swapping y: "+y);


//WAP to find out youngest person name from given array of object 
// Pattern Example : 
const persons = [
    { name: "abc", age: 12},
    { name: "xyz", age: 22},
    { name: "www", age: 32}
];
const max = Math.max(...persons.map(persons=> persons.age))
const maxValue = persons.filter(persons=>persons.age == max);
console.log(max);