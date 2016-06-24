/**
 创建时间 15/11/13
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */
'use strict';
//setTimeout(n=> {
//
//}, 1000);

// this


class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeName(name) {
        this.name = name;
    }

    changeAge(age) {
        this.age = age;
    }

    change(name, age) {

        var self = this;
        let fn = ()=> {

            (()=> {
                (()=> {
                    (()=> {
                        console.log(self === this);
                        this.changeAge(age);
                        this.changeName(name);
                    })();
                })();
            })();


        };

        //function fn(){
        //    this.changeAge(age);
        //    this.changeName(name);
        //}

        fn();
    }

}


var user = new User('zengliang', 30);

user.change('leo', 22);

console.log(user);

