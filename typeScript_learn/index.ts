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