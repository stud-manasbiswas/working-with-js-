// while loop = repeat some task until the specified condition hits

// let username = "";

// while(username === ""){
//     username = window.prompt(`enter your name`);
// }

// console.log(`hello ${username}`)

let loggedIn = false;
let userName;
let password;

while(!loggedIn){
    userName=window.prompt("Enter your username");
    password=window.prompt("Enter your Password");

    if(userName === "myUserName" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in !")
    }
    else{
        console.log("Invalid Credentials! please try again")
    }
}

// for loops

for(let i = 0 ; i <= 2 ; i++){
    console.log(i)

}