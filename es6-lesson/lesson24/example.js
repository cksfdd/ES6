/**
 创建时间 15/11/12
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */
'use strict';

let html = '<div>' +
    '<span>hello</span>' +
    '</div>';

let name = 'zeng';
let qq = '1405491181';

function log(){
  return 'good!'
}

let html2 = `
 <div>
  <ul>
    <li>${ log() }</li>
    <li>${qq}</li>
  </ul>
 </div>
`;

console.log(html2);