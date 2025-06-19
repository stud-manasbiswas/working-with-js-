// eventListener =  listen for specific events to create interactive web pages 
// event : keydown , keyup
//document.addEventListener("event",callback)


const mybox = document.getElementById("mybox")

document.addEventListener("keydown", event =>{
    mybox.textContent ="manas"
    mybox.style.backgroundColor= "tomato";

})
document.addEventListener("keyup", event =>{
    mybox.textContent ="manas"
    mybox.style.backgroundColor= "lightblue"
})