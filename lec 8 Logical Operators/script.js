// Logical Operators


// AND = &&
// OR = ||
// Not = !  true -> false  , false -> true

const temp = 200;

if(temp > 0 && temp<= 30){
    console.log("The Weather is GOOD");
}

else{
    console.log("The Weather is BAD")
}

// strict equality operator === 
// in strict equality operator we not only compare the 
// value we also compare the datatype

const Pi = 3.14;
if(Pi=== '3.14'){
    console.log("That is Pi ")
}
else{
    console.log("This is Not Pi")
}
