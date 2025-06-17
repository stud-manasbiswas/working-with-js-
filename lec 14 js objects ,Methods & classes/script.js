// object = A collection of related properties and /or methods 
// can represent real world objects (people ,products , places )
//  object ={
            // key : value,
            // function()
            //     
    //}

    // objects can not have the same name 

const person1= {
    firstName : "manas ",
    lastName  : "Biswas",
    age : 30 ,
    isEmployed : "@Atlassian",
    sayHello : function(){
        console.log(`hello ${this.firstName}`)
    },
    sayBye : function(){
        console.log(`bye ${this.firstName}`)
    }


}
const person2= {
    firstName : "anjali  ",
    lastName  : "Biswas",
    age : 30 ,
    isEmployed : "@Atlassian",
    sayHello : function(){
        console.log(`hello ${this.firstName}`)
    },
    sayBye : function(){
        console.log(`bye ${this.firstName}`)
    }


}
// accessing first person1 property
console.log(person1.firstName)
console.log(person1.lastName)
person1.sayHello()
person1.sayBye()


// accessing the person2 property

console.log(person2.firstName)
console.log(person2.lastName)
person2.sayHello()
person2.sayBye()

// constructors =  special method for defining the 
// properties and methods of objects

// this method ois usable 

function car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color

}
console.log("\n")
const car1 = new car("ford","Mustang" ,2024 ,"red");
const car2 =  new car("chevrolet","camero",2025,"blue")
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)



// class = (ES6 feature ) provides a more structured and 
//          cleaner way to work with objects 
//          compared to traditional constructor function 
//          ex. static keyword , encapsulation , inheritance

class product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product : ${this.name}`)
        console.log(`Price : $${this.price}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05
const product1 =  new product("shirt",19.99);
const product2 =  new product("Pants",19.99);

product1.displayProduct();

product2.displayProduct();

const total =product1.calculateTotal(salesTax)
console.log(total)


