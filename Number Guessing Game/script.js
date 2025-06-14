console.log("number guessing game ")

const min =1;
const max = 100;

const random = Math.random() *(max-min +1)

// console.log(Math.ceil(random))

let attempts = 0;
let guess;
let running = true;

while(running == true){
    guess = window.prompt(`Guess a number between ${min} -${max}`);
    guess=Number(guess)
    if(random == guess){
        console.log(" your guess is correct congo")
    }
    else{
        console.log("your guess is wrong")
        console.log(`the correct  guess is `, Math.ceil(random))
    }

    console.log(typeof guess,guess);
    running = false;
}