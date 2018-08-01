class Animal {
    constructor(age) {
        this.name = "Animal"
        this.age=age;
    }

    getDescription() {
        return `I am an ${this.name}, and I am ${this.age} years old`;
    }
}

class Dog extends Animal{
    constructor(age,color) {
       super(age);
       this.color=color;
    }


    getDescription() {
        return `${super.getDescription()}, and my color is ${this.color}`;
    }

}
let animal1=new Animal(20);
console.log(animal1.getDescription());  //--> I am an Animal, and I am 20 years old


let dog1=new Dog(20,"black");
console.log(dog1.getDescription());  //--> I am an Animal, and I am 20 years old, and my color is black

console.log(animal1 instanceof Object);     //-->  true
console.log(animal1 instanceof Animal);     //-->  true
console.log(animal1 instanceof Dog);        //-->  false


console.log(dog1 instanceof Object);        //-->  true
console.log(dog1 instanceof Animal);        //-->  true
console.log(dog1 instanceof Dog);           //-->  true