// eventListener =Listen for specific events to create interactive web pages 
//                events : click , mouseover , mouseout
//                .addEventListener(event , callback)


const mybox = document.getElementById("mybox")
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!";
// }

// mybox.addEventListener("click", changeColor);
mybox.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
});

mybox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "OUCH!";
})
mybox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "OUCH!";
})