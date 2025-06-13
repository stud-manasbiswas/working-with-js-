// Arithmetic operators

console.log("arithmetic operators");

let students = 30;
// students = students + 1;  // add
// students = students - 1;  // sub
// students = students * 2;  // mul
// students = students / 2;  // div
// students = students ** 2; // expo
// students = students % 2;  // mod

console.log(students);

// students++ // increment operator
// students-- ; // decrement operator

// operator presedence
// 1.paraenthesis
// 2.exponents
// 3.multiplication & division
// 4.addition & subtraction 

let result = 1+2*3+4**2;
console.log(result);

// How to accept user input ?

// 1. easy way : window prompt
// 2. Professional way = HTML Textbox

let username ;

// window prompt

// username = window.prompt("whats your user name ")
// console.log(username)

// html textbox ---> the professional way'


// maza aagya guru
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value ;
    document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(username)
}


// type conversion = change the datatype of a value to another 
// (strings,numbers,booleans)

let age = window.prompt("how old are you");
age = Number(age);

age+=1; 
// it is not adding 1 it is concatinating the string imp to
//  typecast it

console.log(age);
console.log(typeof age)

let x = "Pizza";

let y = "Pizza";

let z = "Pizza";

x = Number(x)
y= String(y);
z=Boolean(z)

console.log("type of x is " , typeof x)
console.log("type of y is " , typeof y)
console.log("type of z11 is " , typeof z)


// const = a variable that can"t be changed

let pi = 3.14159;
let radius;
let circumference;

document.getElementById("sub").onclick = function(){
    radius = document.getElementById("radius").value;
    circumference = 2*pi*radius;
    document.getElementById("ans").textContent = `your circumference is: ${circumference}`
}


