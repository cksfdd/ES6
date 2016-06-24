'use strict';

var obj = {
    'name': 'leo',
    qq: '1405491181',
    'full name': 'zeng liang'
};

//obj.name

//let map = new Map();
//map.set(obj,'very good!');
//map.set(12,'number = 12');
//let v = map.get(obj);
//console.log(v);
//console.log(map.get(12));
//console.log(map.size);
//map.delete(12);
//console.log(map.size);
//console.log(map.has(obj));
//
//map.set(NaN,'what!');
//map.set(NaN,'what!2');
//console.log(map.get(NaN));
//
//map.clear()

let map = new Map([
    ['name', 'leo'],
    ['qq', '1405491181']
]);

console.log(map.get('name'), map.get('qq'));

let keys = map.keys();

for (let k of keys) {
    console.log(k);
}

let values = map.values();


for (let v of values) {
    console.log(v);
}

let entries = map.entries();

for (let o of entries) {
    console.log(o);
}


for (let o of map) {
    console.log(o);
}


console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries);

var me = {
    name : 'liang'
};

map.forEach(function (k, v) {
    console.log(this.name,k, v);
},me);