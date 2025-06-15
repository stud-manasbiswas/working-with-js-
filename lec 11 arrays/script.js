// arrays =  a variable like structure that can hold
// more than 1 value

let fruits = ["apple","orange" ,"bannana" ,"coconut"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
fruits.push("mango")
console.log(fruits)

let len = fruits.length;

console.log(len)

for(let i = 0; i<len;i++){
    console.log(fruits[i])
}

fruits.sort();

console.log(fruits)


// spread operator  ... allows an iterable such as an array or string 
// to be expanded into seperate elements (unpacks the elements)

let numbers = [1,2,3,4,5]

console.log(numbers)

let maximum = Math.max(...numbers)

console.log(maximum)

let username = "Bro Code";
let letters = [...username].join(".")

console.log(letters)


// rest parameters = (...rest) allow a function work with a variable 
// number of arguments by bundling them into an array
// spread = expands an array into seperate elements 
// rest = bundles seperate elements into an array



function openFridge(...foods){
    console.log(foods);
}
function getFoods(...foods){
    return foods;
}
const food1 = "pizza"
const food2 = "burger"
const food3 = "egg"
const food4 = "meat"
const food5 = "meat ham"

openFridge(food1,food2,food3,food4,food5);

const food = getFoods(food1,food2,food3,food4,food5)

console.log(food);