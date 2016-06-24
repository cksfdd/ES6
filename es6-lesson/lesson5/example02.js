'use strict';

class UserGroup{

    constructor(users){

        /**
         *  users: {'leo':'1405491181','zengliang':'3223322'}
         */
        this.users = users;
    }

    [Symbol.iterator](){

        let self = this;
        let i = 0;
        const names = Object.keys(this.users);
        const length = names.length;

        // iterator 
        return {
            next: function () {
                let name = names[i++];
                let qq = self.users[name];
                return {value: {name,qq} , done:i > length}
            }
        }
    }
}

let group = new UserGroup( {'leo':'1405491181','zengliang':'3223322'});

let i = 0;
for(let user of group){
    //if(i===0){
    //    i++;
    //    continue;
    //}
    console.log(user);
    break;
}

//let iterator = group[Symbol.iterator]();
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());