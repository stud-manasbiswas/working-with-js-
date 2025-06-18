// synchronus = executes line by line consecutively in a sequential manner
//              code that waits for an operation to complete

// asynchronus = Aloowes multiple operations to be performed concurrently without waiting
//               doesn't block the execution flow and allows the program to continue 
//               (i/o operations , network requests , fetching data)
//               handled with : callbacks , promises, async/await 

function func1(callback){
    setTimeout(()=>{console.log("Task 1");
                        callback()},3000);
    
}
function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
    console.log("Task 5")
}
func1(func2)



