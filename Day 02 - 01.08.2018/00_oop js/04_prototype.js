function Animal() {
    this.name = "Animal";
}


function Dog(){
    this.color="Brown";
}

Dog.prototype=new Animal();


let dog1=new Dog();
console.log(dog1.name);  //--> Animal