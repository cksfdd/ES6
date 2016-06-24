/**
 创建时间 15/11/9
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

'use strict';

var obj = {};
var skey = Symbol('testname');
var obj2 = Object.assign(obj, {name: 'leo'}, {age: 30},{[skey]:'ok good'});

console.log(obj === obj2, obj);
console.log(obj[skey]);

const DEFAULT_OPTIONS = {
    name: 'leo'
};

function test(opts) {
    let options = Object.assign({}, DEFAULT_OPTIONS, opts);
    console.log(options);
}

test();

test({name:'zengliang'});