'use strict'

class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    validateName(cb) {
        let name = this.name;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (name == 'chen') {
                    resolve('success');
                } else {
                    reject('error');
                }
            }, 200);
        });
    }

    validatePassword(cb){
        let password = this.password;
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(password== 11){
                    resolve('yes');
                }else{
                    reject('false');
                }
            },200);
        });
    }
}

let user = new User('chen',11);
user.validateName()
    .then(function (result) {
        return user.validatePassword();
    })
    .then(function(){
        console.log('validate success');
    })
    .catch(function(result){
       console.log(result);
    });
