class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("The animal makes a sound.");
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);          
        this.breed = breed;
    }
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}
const animal=new Animal("Generic Animal");
animal.makeSound();
console.log(animal);
const dog=new Dog("HarryPotter","Husky");
dog.makeSound();
console.log(dog);
