// JSON = (JAVASCRIPT OBJECT NOTATION) data - interchange format
//  used for exchanging data between a server and a web application
//  JSON files {key:value} or [value1,value2,value3]

// JSON.stringify() = converts a js object to a JSON string
// JSON.parse() = converts a JSON string to a js object

const names =["manas","biswas","malay","biswas"]
const jsonstring = JSON.stringify(names);
console.log(jsonstring)