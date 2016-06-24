function User(name, age) {
    this.name = name;
    this.age = age;
}

// 静态方法
User.getClassName = function () {
    return 'User';
};


User.prototype.changeName = function (name) {
    this.name = name;
};

User.prototype.changeAge = function (age) {
    this.age = age;
};

Object.defineProperty(User.prototype, 'info', {
    get(){
        return 'name:' + this.name + ' | age:' + this.age;
    }
});

// 子类
function Manager(name, age, password) {
    User.call(this,name,age);
    this.password = password;
}

// 继承静态方法
Manager.__proto__ = User;

// 继承 prototype 方法
Manager.prototype = User.prototype;

// 添加新方法
Manager.prototype.changePassword = function(pwd){
    this.password = password;
};

var manager = new Manager('leo',22,'123');

manager.changeName('zeng liang');

console.log(manager.info);
