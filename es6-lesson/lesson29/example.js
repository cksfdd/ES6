/**
 创建时间 15/11/18
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 */

//function test(x=12,y=22){
//
//  console.log(x,y);
//
//}
//
//test(25);
// undefined[0]
//function test([x=2,[y=3,w=5]=[]],z=90){
//   console.log(x,y,w,z);
//}
//
//test([33],80);

// [x,[y,z]] x1 y 2, z 3
function test([x=1,[y=2,z=3]=[]]=[]){
   console.log(x,y,z);
}

test();