'use strict'
function * fn(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let it =fn();
/*console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

for(v of it){
    console.log(v);
}