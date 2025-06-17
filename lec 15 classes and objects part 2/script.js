//static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created 
// from the class (class owns anything static , not the objects)

class MathUtil{
    static Pi = 3.14159
    // creating a static method 

    static getDiameter(radius){
        return radius *2;
    }
    static getCircumference(radius){
        return radius *2*this.Pi;
    }


}
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.Pi)
console.log(MathUtil.getDiameter(10));


// demonstrating the static methods 
class user{
    static userCount = 0 ;
    constructor(username){
        this.username = username;
        user.userCount++;
    }
    static getUserCount(){
        console.log(`there are ${user.userCount} user online`)
    }
    sayHello(){
        console.log(`My username is ${this.username} `)
    }
}

const user1 = new user("Manas");
const user2 = new user("Manas");
const user3 = new user("Manas");
const user4 = new user("Manas");

user1.sayHello();
user2.sayHello();
user3.sayHello();

user.getUserCount();

//inheritance = allows a new class to inherit properties and methods
// from an existing class(parent - > child)
// helps with code reusability

// class Animal{
//     alive = true;
//     eat(){
//         console.log(`Tis ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`Tis ${this.name} is sleeping`)
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//        console.log(`This ${this.name} is running`) 
//     }
// }
// class FISH extends Animal{
//     name = "FISH";
//     swim(){
//        console.log(`This ${this.name} is swiming`) 
//     }
// }

// const rabbit = new Rabbit();
// const fish = new FISH();

// console.log(fish.alive)
// console.log(fish.eat())
// console.log(fish.sleep())
// console.log(fish.swim())

//super keyword is used in classes 
// to call the constructor or access the properties 
// and methods of a parent

class Animal{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    move(speed){
        console.log(`this ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        // No need for repittion
        // this.name = name;
        // this.age=age;
        this.runspeed=runspeed;
    }

    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runspeed)
    }
}
class FISH extends Animal{
     constructor(name,age,swimspeed){
        super(name,age);
        // No need for repittion
        // this.name = name;
        // this.age=age;
        this.swimspeed=swimspeed;
    }
     swim(){
        console.log(`this ${this.name} can swim`)
         super.move(this.runspeed)
    }
}

const rabbit = new Rabbit("bunny",1,25);
const fish = new FISH("maach",1,25);

console.log(rabbit.age)
console.log(rabbit.name)
console.log(rabbit.runspeed)
rabbit.run();

console.log(`details about my lovely maach`)
console.log(fish.age)
console.log(fish.name)
console.log(fish.swimspeed)
fish.swim();
