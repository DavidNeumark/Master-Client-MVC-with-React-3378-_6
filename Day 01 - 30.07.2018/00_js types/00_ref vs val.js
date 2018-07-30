
//--------------------VAL TYPE--------------------
let num1=3;
let num2=num1;  //the val of num1 is copied to num2

console.log(`num1: ${num1}, num2: ${num2}`);  //--> num1: 3, num2: 3

num1=2;

console.log(`num1: ${num1}, num2: ${num2}`);  //--> num1: 2, num2: 3



//--------------------REF TYPE--------------------
let arr1=["A","B","C"];
let arr2=arr1;  //the rf that is stored in arr1 is copied to arr2


console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: A,B,C, arr2: A,B,C

arr1[0]="Z";

console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: Z,B,C, arr2: Z,B,C

arr1=["T","E","S","T"];  // create a new array in the stack, and change arr1 to point to this new array

console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: T,E,S,T, arr2: Z,B,C

arr1[0]="Y";

console.log(`arr1: ${arr1}, arr2: ${arr2}`);  //--> arr1: Y,E,S,T, arr2: Z,B,C