/**
 * Created by admin on 2016/6/16.
 */

function User(name,age){
    this.name=name;
    this.age=age;
}

//静态方法
User .getClassName=function(){
    return 'User';
};

//原型方法
User.prototype.changeName=function(name){
    this.name=name;
};
User.prototype.changeAge=function(age){
    this.age=age;
};
Object.defineProperty(User.prototype,'info',{
    get(){
        return 'name:' + this.name + '|age:'+ this.age;
    }
});

//子类继承
function Manager(name,age,password){
    User.call(this,name,age);
    this.password=password;
}

//继承静态方法
Manager.__proto__=User;

//继承原型方法
Manager.prototype =new User();
Manager.prototype.constructor=Manager;

//添加方法
Manager.prototype.changePassword=function(pwd){
     this.password=pwd;
};