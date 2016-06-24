/**
 创建时间 15/11/4
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

//
//Array.from // 类似数组的数据结构转换为数组
//Array.of  //  通过多个参数 生成 数组
//
//[].copyWithin(target,start,end) // 通过自身数据,在指定位置 替换 数据
//
//[].find  / [].findIndex
//
//[].fill

//var arr = Array.from({
// '0':'qq 1405491181',
// '1':'leo',
// 'length':2
//},function(item,index){
//  return item + '---' + index
//});
//
//console.log(arr);


var set = new Set(['me','book','leo']);
console.log(Array.from(set));



