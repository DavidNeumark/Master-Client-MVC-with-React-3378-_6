let test;


// --------------VALUE TYPE-------------- (test stores the value)

test=5;
console.log(typeof(test));  //--> number

test=true;
console.log(typeof(test));  //--> boolean

test=undefined;
console.log(typeof(test));  //--> undefined

test=5;
console.log(typeof(null));  //--> object

test=Symbol();
console.log(typeof(test));  //--> symbol

// --------------REF TYPE--------------  (test stores the ref to the value)

test="I am a string";
console.log(typeof(test));  //--> string

test=function(){};
console.log(typeof(test));  //--> function

test=[1,2,3,4];
console.log(typeof(test));  //--> object

test={"age":23};
console.log(typeof(test));  //--> object

test=new Date();
console.log(typeof(test));  //--> object