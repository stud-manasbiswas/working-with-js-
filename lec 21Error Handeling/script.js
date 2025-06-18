// Error = An objkect That is created to represent a problem that occurs 
//         occur often with user input or establishing a connection

// try {} = encloses code that might potentially cause an error
// cathc { } = catch and handle any thrown errors from try
// finally { } = (optional ) always executes . used mostly for clean up 
                // ex . close files , close connections , release resources

try{
    console.olog(x);
    // Network error
    // PROMISE REJECTION
    // SECURITY ERROR
}
catch(error){
    console.error(error)
}
finally{
    // close files
    // close connections
    // release resources
    console.log("This always executes")
}

console.log("You have reached the end!");