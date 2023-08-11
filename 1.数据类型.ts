
const str: string = 'zyyy';
const num: number = 24;
const bool: boolean = false;
const u: undefined = undefined;
const n: null = null;
const obj: object = {
    x: 1,
    name: 'zyyyy'
};
//  BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。
//  可以用在一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n，或者调用函数 BigInt()（但不包含 new 运算符）并传递一个整数值或字符串值。
//  它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。
const big: bigint = 100n;
const sym: symbol = Symbol("me");

//  类型注解是一种轻量级的为函数或变量添加约束的方式  TS提供静态的代码分析

// null和undefined是所有类型的子类型，可以把null和undefined赋值给其他类型

// Array  

// 两种方式定义数组类型
let arr: string[] = ["1", "2"];
let arr2: Array<string> = ["1", "2"];

// 联合类型数组
let arr3: (number | string)[] = [1, 'b', 2, 'c'];

// 指定对象成员的数组
interface Arrobj {
    name: string;
    age: number;
}
let arr4: Arrobj[] = [
    {
        name: 'zyy',
        age: 19,
    }
]


// void 该类型表示没有任何类型，不能被直接赋值，一般在函数没有返回值时区声明
function fun(): void {
    console.log('hello ts');
}
fun();


// never 该类型表示那些永不存在的值的类型
// 1. 如果一个函数执行时抛出了【异常】，那么这个函数永远不存在返回值(因为抛出异常会直接终端程序运行，这使得程序运行不到返回值那一步。即具有不可达的终点，也就永不存在返回了)
// 2. 函数中执行无限循环的代码【死循环】，使得程序永远无法运行到函数返回值那一步
// 异常
function err(msg: string): never {
    throw new Error(msg);
}
// 死循环
function loopForever(): never {
    while (true) { };
}

//  never和null,undefined一样，也是任何类型的子类型，也可以赋值给任何类型
// 利用never类型的特性进行全面性检查：

type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo !== 'string' && typeof foo !== 'number') {
        const check: never = foo;  // 把收窄为never的foo值赋值给一个显式声明的never变量，一般这里可以编译通过
    }
}
// 但是，假如我们修改Foo的类型，增加了boolean，那么分支中foo类型会被收窄为boolean类型，导致无法赋值给never类型，这时就会产生编译错误
// 因此，controlFlowAnalysisWithNever方法总是穷尽了Foo的所有可能类型
// 这样就实现了避免出现 新增联合类型没有对应的实现 的情况。目的是写出 类型绝对安全的代码


// any
// any类型是类型系统的顶级类型，any类型允许被赋值为任意类型
let a1: any = 6;
a1 = '1';
// 变量在声明时如果未指定类型，也会被识别为任意值类型
// 但是，如果使用any类型，就无法使用ts提供的大量保护机制。any是魔鬼！

// 类型推断
// ts可以基于赋值表达式推断类型
function add1(a: number, b: number) {   // 推断返回值类型
    return a + b;
}
const res1 = add1(1, 1);  // 推断res1类型
// 但是，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型，而完全不会被类型检查
let test;  // any

// 类型断言
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
const arrayNumber: number[] = [1, 2, 3, 4];
const newArr = arrayNumber.filter(item => item > 2) as number[];
console.log(newArr);