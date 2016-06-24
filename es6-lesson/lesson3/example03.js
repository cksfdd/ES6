'use strict';

class User {

    constructor(name,password) {
        this.name = name;
        this.password = password;
    }

    validateName(cb) {
        let name = this.name;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (name === 'leo') {
                    resolve('success');
                } else {
                    reject('error');
                }
            });
        });
    }

    validatePassword(cb){
        let password = this.password;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (password === '123') {
                    resolve('success');
                } else {
                    reject('error');
                }
            });
        });
    }

}


const user = new User('leo','1235');

user.validateName()
    .then(function (result) {
        return 'validat name ok';
    })

    .then(function (result) {
        console.log(result);
    });


    //var promise = Promise.resolve('validate name ok');

    //var promise = new Promise(function(resolove,reject){
    //    resolve('validat name ok');
    //});

    //



