'use strict';
let name = Symbol('name');

let obj = {
  age:22,
  [name]:'leo'
};

//console.log(Object.keys(obj));

//for(let k in obj){
//    console.log(k);
//}

//console.log(Object.getOwnPropertyNames(obj));

let key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key]);