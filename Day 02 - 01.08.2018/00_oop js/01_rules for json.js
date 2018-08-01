let key="firstName";

function getKey(){
    return "lastName";
}

let obj1={
    key:"Bob"
}

console.log(obj1);  //--> { key: 'Bob' }



let obj2={
    [key]:"Bob"
}

console.log(obj2); //--> { firstName: 'Bob' }



let obj3={
    ["date"+Date.now()]:"Bob"
}

console.log(obj3);  //--> { date1533104286394: 'Bob' }

let obj4={
    [getKey()]:"Bob"
}

console.log(obj4);  //--> { lastName: 'Bob' }