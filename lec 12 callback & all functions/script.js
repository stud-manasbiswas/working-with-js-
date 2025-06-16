// callback = a function thst is passed as an argument to another function
// used to handle asynchronus operations:
// reading a file 
// network req
// interacting with databases
//"Hey , when you re done , call this next"

// this activities takes some time to complete 


hello(wait);
// goodbye();

function hello(callback){
    console.log("hello")
    callback();
}
function wait(){
    console.log("wait")
}

function leave(){
    console.log("leave")
}
function goodbye(){
    console.log("goodbye")
}

// function tom somme two numbers
sum(displayconsole,1,2)
function sum(callback , x,y){
    let result = x+y;
    callback(result)
}
function displayconsole(result){
    console.log(result)
}

// forEach() = method used to iterate over the elements of an array 
// and apply a specified function (callback) to each element

// let nubers = [1,2,3,4,5];
// console.log("doubled elements")
// nubers.forEach(double)
// nubers.forEach(display)
// console.log("tripled elements")
// nubers.forEach(triple)
// nubers.forEach(display)


// function double(element , index, array){
//     array[index] = element *2
// }

// function triple(element , index, array){
//     array[index] = element *3
// }

// function display(element){
//     console.log(element);
// }


// relastic example

let fruits = ["apple","orange","banana","coconut"]

// fruits.forEach(uppercase)
// fruits.forEach(displayFruits)
// console.log("capitalize")
fruits.forEach(capitalize)
fruits.forEach(displayFruits)

function uppercase(element,index,fruits){
    fruits[index]= element.toUpperCase();
}
function capitalize(element,index,fruits){
    fruits[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function displayFruits(element){
    console.log(element)
}


// .map() = accepts a callback and apples that function
// to each element of an array , then return a new array

const numbers =[1,2,3,4,5] 

const output = numbers.map(square);

console.log(output)

function square(element){
    return Math.pow(element,2)
}

const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates)

console.log(formattedDates)
function formatDates(elements){
    const parts = elements.split("-");
    return`${parts[1]}/${parts[2]}/${parts[0]}`;
}


// filter() = creates a new array by filtering out elements

let number = [1,2,3,4,5,6,7,8,9];
console.log("even numbers")
let evenNums = number.filter(isEven)
console.log(evenNums)

console.log("odd numbers")
let oddNums = number.filter(isodd)
console.log(oddNums)


function isEven(element){
    return element % 2 === 0;
}
function isodd(element){
    return element % 2 === 1;
}


const ages =  [16,17,18,19,20,60]
const adults = ages.filter(isadult)
console.log(adults)

function isadult(element){
    return element>= 18;
}

// .reduce() = reduce the elements of an array 
// to a single value

const prices = [ 5,30,25,15,20]
const total = prices.reduce(sum)

console.log(`$ ${total.toFixed(2)}`)

function sum(previous,next){
    return previous + next ;
}