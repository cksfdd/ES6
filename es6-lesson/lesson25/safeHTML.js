/**
 创建时间 15/11/13
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

'use strict';

function safe(strArr) {

    let result = ''; // fuck -> ***

    for (var i = 0, len = strArr.length; i < len; i++) {
        result += strArr[i].replace(/</g,'&lt;').replace(/>/g,'&gt;');
        if (i < arguments.length - 1) {
            result += arguments[i + 1];
        }
    }

    return result;
}

let name = 'zengliang';

let result = safe`<p>hello ${name}</p>`;

console.log(result);



//
//function ejs(){}
//function java(){}
//
//let ejsResult = ejs`
//    <% for(){ %>
//
//    <% } %>
//`;
//
//
//let javaResult = java`
//   class Hello{
//      public static void main()
//   }
//`;
