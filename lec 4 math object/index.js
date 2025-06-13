// console.log("math")

// // math = built in object that provides a 
// // collection of properties and methods

// console.log(Math.PI)

// let x = 3.32;
// let y = 2;
// let z;
// // z=Math.round(x)
// // z=Math.floor(x)
// // z=Math.ceil(x)

// // z=Math.trunc(x) // removes a decimal/

// // z=Math.pow(x,y);
// // z=Math.sqrt(81)



// // console.log(z);


// // Random Number Genrator

// // let random = Math.random();
// // console.log(random)

// // we want to roll a dice 



// console.log(random)

const myButtons =document.getElementById("myButtons")
const myLabel =document.getElementById("myLabel")

document.getElementById("myButtons").onclick = function(){
    let random = Math.random() * 6;
    random= Math.floor(random) + 1;
    document.getElementById("myLabel").textContent =random;
}

