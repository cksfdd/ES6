/**
 创建时间 15/11/2
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */


function createData(){
 var buffer = new ArrayBuffer(4);
 var arr = new Int8Array(buffer);
 arr[0] =12;
 arr[1] =15;

 var arr2 = new Uint16Array(buffer);

 arr2[1] = 9; // 2byte

 return buffer;
}

//
//var buf = createData(); // image data
//var arr1 = new Int8Array(buf);
//var arr2 = new Uint16Array(buf);
//console.log(arr1[0],arr1[1],arr2[1]);

var buf = createData();
var dataview = new DataView(buf);
console.log(dataview.getInt8(0),dataview.getInt8(1),dataview.getUint16(2,true));

