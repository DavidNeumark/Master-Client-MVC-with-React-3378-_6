class Animal {
    constructor(age) {
        this.name = "Animal"
        this.age=age;
    }

    getDescription() {
        return `I am an ${this.name}, and I am ${this.age} years old`;
    }
}


let animal1=new Animal(20);
console.log(animal1.getDescription());  //--> I am an Animal, and I am 20 years old
