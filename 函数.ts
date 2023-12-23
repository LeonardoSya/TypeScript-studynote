/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-08-11 09:58:47
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-12-23 22:31:08
 * @FilePath: \TypeScript\函数.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function sum(x: number, y: number): number {
    return x + y
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
};

// 用接口定义函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
// 采用函数表达式接口定义函数的方式，对等号左侧进行类型限制，可以在后面对函数名赋值时保证参数个数、参数类型、返回值类型不变

// 可选参数 & 参数默认值
function buildlName(firstName: string = 'Tom', lastName?: string) {
    if (lastName) return firstName + lastName;
    else return firstName;
}
let tom = buildlName();

// 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
    // console.log(array);
}
let a: number[] = [];
push(a, 1, 2, 3);


// 假设我们希望add函数同时支持str和num类型，因此我们可以定义一个 str | num 联合类型，同时为这个联合类型取别名
// type Combination = string | number;
// 函数重载：使用相同名称和不同参数数量或类型 创建多个方法
// 为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表取处理函数的调用

type Types = number | string
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Types, b: Types): Types {
    if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
    return a + b;
}
const res = add('12', ' 123');
console.log(res.split(' '))
// 这样，我们为add函数提供了多个函数类型定义，从而实现函数的重载。这时就不会报错了因为此时res的类型是string


