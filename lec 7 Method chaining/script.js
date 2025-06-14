// method chaining == calling one mentofd after another in one continious line of code


let username = window.prompt("Enter Your UserName")
// ----------- NO Method Chaining -------------

// let username = window.prompt("Enter Your UserName")
// username = username.trim() // trim any spaces if there
// let letter = username.charAt(0)
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;

// console.log(username);


// ------------ Method Chaining ----------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

console.log(username)