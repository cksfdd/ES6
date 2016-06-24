/**
 * Created by user on 16/6/17.
 */
'use strict'
class UserGroup{
    constructor(users){
        this.users=users;
    }
    [Symbol.iterator](){
        const names = Object.keys(this.users);
        const length=names.length;
        let i = 0;
        let self = this;
        
        //iterator
        return {
            next(){
                let name = names[i++];
                let qq = self.users[name];
                return {value:{name,qq},done:i>length}
            }
        }
        
    }
}
let group = new UserGroup({ "leo":'14022615856','cxd':'7854331'});
let i=0;
for(let user of group){
    console.log(user);
}
