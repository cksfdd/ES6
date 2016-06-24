'use strict';

var obj = {
    length:2,
    '0':'abc',
    '1':'ddd'
};


//借用[]的Symbol.iterator
obj[Symbol.iterator] = [][Symbol.iterator];

for(let i of obj){
    console.log(i);
}
