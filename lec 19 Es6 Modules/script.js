// ES6 Module = An external file that contains reusable code.
//              that can be imported into other javascript files.
//              wrie reusable code for many different apps.
//              can contain variables , classes , functions ... and more
//              introduced as part of ECMAScript 2015 update

import {Pi ,getArea,getCircumference} from './mathUtil.js'

console.log(Pi)
const circumference = getCircumference(10);
console.log(circumference)
