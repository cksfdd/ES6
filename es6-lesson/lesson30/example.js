/**
 创建时间 15/11/18
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 */

//function arrtest([x=33,y=55]=[12,22]){
//   console.log(x,y);
//}
//
//arrtest();

//function test({x,y}={x:12,y:22}){
//   console.log(x,y)
//}
//
//test();

function config({x=1,y=2,z=3}={}, [a=11,b=22,c=33]=[], name = 'leo') {
    console.log(x, y, z);
    console.log(a, b, c);
    console.log(name);
}

config();