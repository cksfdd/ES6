/**
 创建时间 15/11/10
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

'use strict';

class User{
  constructor(){

  }
}

var p = {
  getName(){}
};

var user = new User();

console.log(user.__proto__ === User.prototype);

user.__proto__ = p;
console.log(user.getName);

Object.setPrototypeOf(user,p);
var proto = Object.getPrototypeOf(user);
console.log(proto === user.__proto__);







