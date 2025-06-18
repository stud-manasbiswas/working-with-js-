// DOM =  Document Object Model
// object { } that represents the page you see in the web browser
// and provides you with an API to interact with it 
// web browser constructs the dom when it loads an Html document,
// and structures all the eleemnt in na tree- like representation .
// js can access the DOM to dynamically 
// change the content , structure , and style of a web page

// ------- element Selector -------
 // element selector  =  Methods USed to target and manipulate HTMl
 // elements They allow you to select one or multiple HTML elements 
 // from the DOM  

// document.getElementById() // ELEMENT OR NULL
// document.getElementsByClassName() //HTML COLLECTION
// document.getElementsByTagName() //HTML COLLECTION
// document.querySelector()     // ELEMENT OR NULL
// document.querySelectorAll()  // NODELIST

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor ="yellow"

// const fruits = document.getElementsByClassName("fruits")
// fruits[0].style.backgroundColor = "red"

// const h4Elemets = document.getElementsByTagName("h4");
// h4Elemets[0].style.backgroundColor ="yellow"

// for(let h4Elemet of h4Elemets){
//     h4Elemet.style.backgroundColor ="yellow"
// }

const elemet = document.querySelector(".fruits")
elemet.style.backgroundColor ="yellow"