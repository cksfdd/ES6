/**
 创建时间 15/11/9
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */
var io = require('socket.io')(3000);

io.on('connection', function (socket) {
 console.log(333);
 io.emit('this', { will: 'be received by everyone'});

 socket.on('private message', function (from, msg) {
  console.log('I received a private message by ', from, ' saying ', msg);
 });

 socket.on('disconnect', function () {
  io.emit('user disconnected');
 });
});