'use strict';

//function User(name, age) {
//    this.name = name;
//    this.age = age;
//}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    //// 静态方法
    //User.getClassName = function () {
    //    return 'User';
    //};
    static getClassName() {
        return 'User';
    }

//    User.prototype.changeName = function (name) {
//    this.name = name;
//};
    changeName(name) {
        this.name = name;
    }

//    User.prototype.changeAge = function (age) {
//    this.age = age;
//};
    changeAge(age) {
        this.age = age;
    }

//    Object.defineProperty(User.prototype, 'info', {
//    get(){
//        return 'name:' + this.name + ' | age:' + this.age;
//}
//});
    get info() {
        return 'name:' + this.name + ' | age:' + this.age;
    }
}


//function Manager(name, age, password) {
//    User.call(this,name,age);
//    this.password = password;
//}
//// 继承静态方法
//Manager.__proto__ = User;
//
//// 继承 prototype 方法
//Manager.prototype = User.prototype;

class Manager extends User {
    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }

    //// 添加新方法
    //    Manager.prototype.changePassword = function (pwd) {
    //    this.password = password;
    //};
    changePassword(password) {
        this.password = password;
    }

    get info(){
        var info = super.info;
        console.log(info);

        return info + ' -- new';
    }
}

console.log(typeof User,typeof Manager);

var manager = new Manager('leo', 22, '123');

manager.changeName('zeng liang');

console.log(manager.info);



//class I  extends User{
//    // 自动加入默认constructor
//    constructor(...arg){
//        super(...arg);
//    }
//}
//
//var me = new I('leo',28);
//
//console.log(me);
