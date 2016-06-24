/**
 创建时间 15/11/10
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */
'use strict';
class A {
    constructor() {
        this.name = 'leo';
    }

    getName() {
    }
}

class B extends A{
    constructor(){
        super();
        this.age = 22;
    }

    getAge(){

    }

    [Symbol('fullname')](){

    }
}

B.prototype.getClass = function () {

};

var b = new B;

// Object.keys 能够得到自身的可枚举的属性,但得不到原型链上的属性.
// 得不到 Symbols 属性
console.log(Object.keys(B.prototype));

// Object.getOwnPropertyNames(b) 能够得到自身属性,
// 包括不可枚举的属性,但得不到原型链上的属性.
// 得不到 Symbols 属性
console.log(Object.getOwnPropertyNames(B.prototype));

// 可以得到自身的 Symbols 属性,包括不可枚举的属性.
console.log(Object.getOwnPropertySymbols(B.prototype));

// 可以得到自身和继承的原型链上的属性,但必须是可枚举属性.
for(let key in b){
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(B.prototype,'getAge'));