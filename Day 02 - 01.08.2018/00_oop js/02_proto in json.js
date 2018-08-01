let person={
    name:"Bob",
    age:20
}


let student={
    grade:100,
    __proto__:person  //__proto__ is a js keyword
}


console.log(student.name, student.age, student.grade);  //--> Bob 20 100