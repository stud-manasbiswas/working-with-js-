// promise = An object that manages asynchronus operations.
//              wrap a promise object around {asynchronus code}
//              "I promise to return a value"
//              PENDING -> RESOLVED or REJECTED
// new Promise((resolve,reject)=>{asynchronus code})

function walkDog(){
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = true 
           if(dogwalked){
            resolve("you walk the dog")
           }
           else{
            reject("you didn't walk the dog")
           }
            
        },1500);
    })
}
function cleanKitchen(){
    
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            const kitchenclean = true 
           if(kitchenclean){
            resolve("you cleaned the kitchen")
           }
           else{
            reject("you didn't cleaned the kitchen")
           }
            
        },2500);
    })
}
function TakeOutTrash(){
    
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
         const trashout = true 
           if(trashout){
            resolve("you cleaned the trash")
           }
           else{
            reject("you didn't cleaned the trash")
           }
        
    },500);
    })
}
// walkDog().then(value =>{console.log(value); return cleanKitchen()})
//          .then(value =>{console.log(value); return TakeOutTrash()})
//          .then(value =>{console.log(value);console.log("you finished all the chores")}).catch(error => console.erroe(error));

        
// async /await = async = makes a function return a promise
//                await = makees an async function wait for a promise
//                 allows you to write asynchronus code in a synchronus manner
// async doesnt have to resolve or rejecgt parameters
// everything after await is placed in an event queue

async function doChores(){
    const walkdogresult = await walkDog();
    console.log(walkdogresult);

    const cleankitchenresult =  await cleanKitchen();
    console.log(cleankitchenresult)

    const trashoutresult =  await TakeOutTrash();
    console.log(trashoutresult)
}
    
doChores();

