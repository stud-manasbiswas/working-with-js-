console.log("function Expression")

// function expressions = a way to define function as 
// values or variables

const hello = function(){
    console.log("Hello");
}
hello();

setTimeout(hello ,3000);

// using a function declaration

// const numbers = [1,2,3,4,5,6]
// const squares = numbers.map(square)

// console.log(squares)

// function square(element){
//     return Math.pow(element,2);
// }

// using a function expression i.e function as a value

const numbers = [1,2,3,4,5,6,7,8,9,10]
const squares = numbers.map(function(element){
    return Math.pow(element,2);
})

const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})
//squares
console.log(squares)
// cubes
console.log(cubes)

const evenNums = numbers.filter(function(element){
    return element % 2 ===0 ;
}) 

console.log(evenNums)


// arrow functions = a consie way to write function expressions
// good for simple functions that you use only once 
// (parameters ) => some code

// function hello(){
//     console.log("hello");
// }
// hello();

// const hello = function(){
//     console.log("hello");
// }

// more consie way using an arrow function

const hlo= (name) => console.log(`hello ${name}`);

hlo("manas");

//setTimeout

// setTimeout(heloo,3000);
// function heloo(){
//     console.log("hello biswas")
// }

// setTimeout(function heloo(){
//     console.log("hello biswas")
// },3000);

const num = [ 1,2,3,4,5,6]

const square = num.map((element)=>Math.pow(element,2))
console.log(square)

const cube = num.map((element)=>Math.pow(element,3));
console.log(cubes);

const evenNum = num.filter((element)=> element % 2 === 0 )
console.log(evenNum)