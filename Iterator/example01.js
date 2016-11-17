/**
 * Created by user on 16/6/17.
 */
var arr=['a','b','c'];
var iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
