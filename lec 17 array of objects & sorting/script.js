const fruits =[{name :"apple" , color: "red" , calories:95},
                {name :"orange" , color: "orange" , calories:45},
                {name :"banana" , color: "yellow" , calories:75},
                {name :"coconut" , color: "white" , calories:405}
            ]
console.log(fruits[0].name)
console.log(fruits[0].color)
console.log(fruits[0].calories)
console.log(fruits[1].name)
console.log(fruits[1].color)
console.log(fruits[1].calories)

fruits.push({name:"grapes",color:"green",calories:65});

// using the 

// using the pop mwthod
fruits.pop()
// console.log(fruits)
// ------- for Each method ------

// methods to print the complete subarray using the for each method
// fruits.forEach((elements)=>console.log(elements));

//  fruits.forEach(fruit=>console.log(fruit.calories));

//-----map()-----
const FruitNames = fruits.map(fruit => fruit.name);
console.log(FruitNames)
const FruitColors = fruits.map(fruit => fruit.color);
console.log(FruitColors)

// ----- filter() -----
const YellowFruits= fruits.filter(fruit => fruit.color === "yellow")
const LowcalFruits= fruits.filter(fruit => fruit.calories <= 75)
console.log(YellowFruits)
console.log(LowcalFruits)

// --- reduce() -----
const maxFruit = fruits.reduce((max,fruit)=>fruit.calories>max.calories ? fruit :max);
console.log(maxFruit)
const minFruit = fruits.reduce((min,fruit)=>fruit.calories<min.calories ? fruit :min);
console.log(minFruit)