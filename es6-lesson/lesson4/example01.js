'use strict';

let getName = Symbol('name');

let obj = {
   [getName](){
       return 'zeng liang';
   }
};

console.log(obj[getName]());