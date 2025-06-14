let username = "Manas Biswas"

// charAt()
username.charAt(0)
console.log(username.charAt(0))

// indexof
console.log(username.indexOf("B"))

// trim() --> trim the whitespaces
username = username.trim();
console.log(username)

//toUpperCase &&  toLowerCase
username=username.toLowerCase();

//replaceAll

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber)

// string slicing 
// process of creating a substring 

let fullname = "manas Biswas";
let firstname = fullname.slice(0,5); // ending value is exclusive

// to get the lastchar we can use the negative index 

let lastchar = fullname.slice(-1)


const email ="manasbiswas342@gmail.com";

let userName  = email.slice(0, email.indexOf("@"))

let extension = email.slice(email.indexOf("@"))

