function outer(num) {
    let myNum = num * 2;

    return () => { console.log(`original parameter: ${num},  myNum: ${++myNum}`); }
}

let firstCall=outer(1);
let secondCall=outer(100);

 firstCall();  //--> original parameter: 1,  myNum: 3
 secondCall();  //--> original parameter: 100,  myNum: 201

firstCall=null;
