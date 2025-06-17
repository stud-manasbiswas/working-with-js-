// date objects = objeects that contain values that represent 
// dates and times these date objects can be changed and formatted

// date(year, month,day , hour,minute,second,ms)
// const date = new Date(2025,6,17,22,6,30,573);
// console.log(date)

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

console.log(year)
console.log(month)


// closure = a function defined inside of another function,
// the inner function has access to the variables 
// and scope of the outer function
// allow for private variablkes and state maintenance 
// used frequently in js frameworks :react , vue ,angular

// function outer(){
//     let message = "hello";

//     function inner(){
//         console.log(message)
//     }
//     inner();

// }
// message= "goodbye " // wont work , updation not allowed
// outer();


function createCounter(){
    let count = 0 ;

    function increment(){
        count++;
        console.log(`count increased to ${count}`)
    }
   function getcount(){
    return count;
    }
    return {increment,getcount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

// we cant access the count
// console.log(counter.count)
console.log(`The current count is ${counter.getcount()}`)


// setTimeout() = function in javascript that allows you to schedule 
// the execution of a fuunction after an amount of time (millisecond)
// timers are approximate (caries based on the workload of the java script runtime env.)

// setTimeout(callback , delay)

setTimeout(function(){
    console.log(" i love you ")
},3000)