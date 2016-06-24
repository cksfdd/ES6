/**
 * Created by admin on 2016/6/16.
 */
'use strict'
/*function User(name,age){
    this.name=name;
    this.age=age;
}*/
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

//静态方法
    /*User .getClassName=function(){
     return 'User';
     };*/
    static getClassName=function(){
        return 'User';
    };


//原型方法
    /*User.prototype.changeName=function(name){
        this.name=name;
    };*/
    changeName(name){
        this.name=name;
    }

    /*User.prototype.changeAge=function(age){
        this.age=age;
    };*/
    changeAge(age){
        this.age=age;
    }

    /*Object.defineProperty(User.prototype,'info',{
        get(){
            return 'name:' + this.name + '|age:'+ this.age;
        }
    });*/
    get info(){
        return 'name:' + this.name + '|age:' + this.age;
    }

}


//子类继承
/*function Manager(name,age,password){
    User.call(this,name,age);
    this.password=password;
}*/

//继承静态方法
/*Manager.__proto__=User;*/

//继承原型方法
/*Manager.prototype =new User();
Manager.prototype.constructor=Manager;*/

//ES6同时继承了属性和方法
class Manager extends User{
    //里面如果不写，自动默认加入construtor
    constructor(name,age,password){
        //调用父类
        super(name,age);
        this.password=password;
    }

//添加方法
    /*Manager.prototype.changePassword=function(pwd){
        this.password=pwd;
    };*/
    changePassword(pwd){
        this.password=pwd;
    }

//super的其他用法
    get info(){
        //先执行父类的info
        var info = super.info;
        console.log(info);
        //再执行子类的info
        return info + '--new';
    }
}


//立即执行de类
let user = new class User{
    constructor(name){
        this.name = name;
    }
}('cxd');
console.log(user);


//注意：不会被提升
let user2= new User('cxd');

class User{
    constructor(name){
        this.name=name;
    }
}

console.log(user2);//报错