/**
 创建时间 15/11/9
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

var ok = 'ok';
//obj['myid'+ok] = '007';
//obj['age'+ok] = 22;
//


var obj = {
    ['myid' + ok]: '007',
    ['age' + ok]: 22,
    getName(firstName, lastName){

        return {firstName, lastName}
    },

    set name(name) {
        this.name = name;
    },

    get name() {
        return this.name;
    }
};

var obj2 = {};

//exports.obj = obj;
//exports.obj2 = obj2;

module.exports = {obj,obj2};