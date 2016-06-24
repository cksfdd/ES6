'use strict';

var obj = {'leo':'1405491181','zengliang':'3223322'};
var obj2 = {'fdsffs':'fdfsf','liang':'332222'};

let iteratorFun = function () {
    let self = this;
    let i = 0;
    const names = Object.keys(this);
    const length = names.length;

    // iterator
    return {
        next: function () {
            let name = names[i++];
            let qq = self[name];
            return {value: {name,qq} , done:i > length}
        }
    }
};

obj[Symbol.iterator] = iteratorFun;
obj2[Symbol.iterator] = iteratorFun;

for(let u of obj2) console.log(u);