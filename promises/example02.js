'use strict'

class User {
    constructor(name) {
        this.name = name;
    }

    send(cb) {
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
}

let user = new User('chen');
user.send()
    .then(function (result) {
        console.log(result);
    })
    .then(function(result){
        //  如果上一个then没有返回值,那么也会执行,只不过result=undefined
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    })  ;
