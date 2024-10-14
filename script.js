// let n =5;
// for(let i= 0;i<n;i++){
//     console.log("hello",i);
// }

// console.log("hello Deepak");



// let args = process.argv;
// for ( let i =2;i<args.length;i++){
//     console.log("hello ..",args[i]);
// }


// const some=require("./math");
// console.log(some);
// console.log(some.sum(2,6));


// to import all other file that are seperate from each other

// const info =require("./Fruits")
// console.log(info);

//import

import {sum,PI} from "./math.js";
import { generate} from "random-words";
console.log(generate());