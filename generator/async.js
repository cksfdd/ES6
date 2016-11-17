function* async(){
    var a=yield 1;
    var b=yield a;
    var c = yield b;
    yield c+b;
}
var gen=async();

var result_a=gen.next().value;
var result_b=gen.next(result_a).value;
var result_c=gen.next(result_b).value;
console.log(gen.next(result_c));
