// alert('this is the first test');
let a:number = 5;
let b: number = 0x1111;
let c: boolean =true;
let d: undefined = undefined;
console.log('类型赋值：',a,b,c,d);
let numberType: any = 4;
numberType = false;
console.log('any type:',numberType.name, typeof numberType.name)

// interface
interface person {
    name: string,
    age: number,
    [propName: string]: string | number
}
let p: person = {
    name: 'clchenliang',
    age: 12,
    sex: 'false'
}
console.log('接口定义：',p);

// function 
function f1(param1:number, param2: string): boolean {
    return param2 === param1.toString();
}
console.log('function: ', f1(2,'3'));
console.log('function -- 运行传异参', f1(3, f1(2, '3').toString()));
// 编译通过后，被引用的时候，传参并没有被限制

// reverse function 重构函数
function reverseFun(num: number, str: string): void;
function reverseFun(str: string, num: number): void;
function reverseFun(param1: string | number, param2: string | number) {
    console.log('get the function params: ',typeof param1, typeof param2)
}
reverseFun(1, '3');
reverseFun('1', 3);