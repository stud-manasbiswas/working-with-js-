// DOM Navigation = The process of navigating through  the structure 
// of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementChild
// .previousElementSibling
// .parentElement
// .children

/// ..........           .firstElementChild         ..........

// const element = document.getElementById("fruits")
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow"

// const ulElements = document.querySelectorAll("ul")

// ulElements.forEach(ulElement => {
//     const FirstChild = ulElement.firstElementChild;
//     FirstChild.style.backgroundColor = "red";
    
// });



/// ..........           .last ElementChild         ..........

// const element = document.getElementById("fruits")
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow"


// const ulElements = document.querySelectorAll("ul")

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "red";
    
// });


/// ....... .nextElementSibling  ..........

// const element =  document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// --------------    parent sibling ----------
const element = document.getElementById("onions")
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
