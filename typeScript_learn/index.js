// alert('this is the first test');
var a = 5;
var b = 0x1111;
var c = true;
var d = undefined;
console.log('类型赋值：', a, b, c, d);
var numberType = 4;
numberType = false;
console.log('any type:', numberType.name, typeof numberType.name);
var p = {
    name: 'clchenliang',
    age: 12,
    sex: 'false'
};
console.log('接口定义：', p);
// function 
function f1(param1, param2) {
    return param2 === param1.toString();
}
console.log('function: ', f1(2, '3'));
console.log('function -- 运行传异参', f1(3, f1(2, '3').toString()));
function reverseFun(param1, param2) {
    console.log('get the function params: ', typeof param1, typeof param2);
    console.log('after assert :', typeof param1);
}
reverseFun(1, '3');
reverseFun('1', 3);
//
