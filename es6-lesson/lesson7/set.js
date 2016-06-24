'use strict';

//let arr = [1,2,3,'5','5'];

//let st = new Set();
//
//let user = {name:'leo',qq:'1405491181'};
//st.add(user).add(user);
//console.log(st.size);
//let bool = st.delete(user);
//console.log(bool);
//
//st.add(22);
//console.log(st.has(22),st.size);
//
//st.clear();
//console.log(st.size);

//
//let arr = ['qq1405491181','forjs.org','forjs.org'];
//let newArr = Array.from(new Set(arr));
//console.log(newArr);

//console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

let st = new Set(['qq1405491181','forjs.org','forjs.org','网名 leo']);

//console.log(NaN === NaN);
//st.add(NaN).add(NaN).add(NaN);

for(let v of st){
    console.log(v);
}

//let keysI = st.keys();
//for(let k of keysI){
//    console.log(k);
//}

//let valuesI = st.values();
//for(let v of valuesI){
//    console.log(v);
//}

//let entriesI = st.entries();
//for(let o of entriesI){
//    console.log(o);
//}



