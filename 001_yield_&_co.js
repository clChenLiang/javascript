'use strict';
/**
* co 只是执行掉函数，yield 会控制流程
*/
const co = require('co');

// 普通函数
function normalFun(params) {
    // return '普通函数';
    return {stirng:'普通函数'};
}

function *wrapYieldFun(params) {
    let result = yield normalFun();
    console.log(`wrapYieldFun get the result :${params}, ${JSON.stringify(result)}`);
    return 'nothing';
}
console.log(`${new Date().getTime()}`);

co(function*(){console.log( co(wrapYieldFun('直接使用 yield')));});
console.log(`${new Date().getTime()}`);
console.log(co(wrapYieldFun('使用 wrap 包裹')));
console.log(`${new Date().getTime()}`);

