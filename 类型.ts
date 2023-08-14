
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

// 非空断言
// 后缀表达式操作符 ! 用于断言操作对象是 非null和非undefined类型
// 也就是说，x！将从x值域中排除null和undefined
let myNullOrUndefinedOrString: null | undefined | string = 'str';
myNullOrUndefinedOrString!.toString()  // ok

// 确定赋值断言
// 允许在实例属性和变量声明后面放置一个!,从而告诉ts 该属性会被明确地赋值
let x1 !: number;   // 通过确定赋值断言，ts就知道该属性会被明确地赋值
initialize();
console.log(2 * x1);
function initialize() {
    x1 = 10;
}



// 字面量类型
// 字符串字面量
type Direction = 'up' | 'down';
function move(dir: Direction) {   // 通过字面量类型组合的联合类型，可以限制函数参数为指定的字面量类型集合，然后编译器会检查参数是否是指定的字面量类型集合里的成员
    // 相较于使用string类型，使用字面量类型(组合的联合类型)可以将函数参数限定为更具体的类型
}
move('up');  // ok

// 数字字面量类型和布尔字面量类型的使用 和字符串字面量类型类似
interface Config {
    size: 'small' | 'big';
    isEnable: boolean;
    margin: 0 | 2 | 4;
}


// 类型拓宽 Type Widening
// 通过Let或var定义 且 未显式添加类型注解 的 变量、形参、对象的非只读属性，它们的类型会被字面量类型拓宽
let strTW = 'this is string';   // type: string  类型拓宽为string
let strFun = (str = 'this is string') => strTW;    // type: (str?: string)=>string  形参类型拓宽为string|undefined
const strTW1 = 'this is string';  // type: 'this is string'  常量不可更改，类型没有拓宽，类型是字面量类型
let strTW2 = strTW1;    // type: string
let strFun2 = (str = strTW2) => strTW;   // type: (str?:string)=>string

// 通过添加显式类型注解控制类型拓宽行为
const specifiedStr: 'this is string' = 'this is string';
let strr = specifiedStr;   // 即便使用let定义，类型仍是'this is string'

// 类型缩小
// 帮助类型检查器缩小类型的一种常见方法是在它们上放置一个明确的“标签” ———— 标签联合 / 可辨识联合
interface UploadEvent {
    type: 'upload';
    filename: string;
    contents: string;
}
interface DownloadEvent {
    type: 'download';
    filename: string;
}
type AddEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AddEvent) {
    switch (e.type) {
        case 'download':
            e;   // type is DownloadEvent   
            break;
        case 'upload':
            e;  // type is UploadEvent
            break;
    }
}



//  联合类型 通常与null/undefined一起使用
const sayHello = (name: string | undefined) => { };  // 这里意味着可以可以把str或undefined的值传给say函数

let numTest: 1 | 2 = 1;
type EventTest = 'click' | 'scroll' | 'mousemove';
// 这两个是字面量类型


// 交叉类型
// 交叉类型包含所需的所有类型的特性
// 实际用于将多个接口类型合并成一个类型，从而实现等同接口继承的效果
type IntersectionType = { id: number; name: string } & { age: number };
const mixed: IntersectionType = {
    id: 1,
    name: 'zyy',
    age: 18,
}

// 当同名属性是非基本数据类型
interface A { x: { d: true } };
interface B { x: { e: string } };
interface C { x: { f: number } };
type ABC = A & B & C;
const abc: ABC = {
    x: {
        d: true,
        e: 'zyy',
        f: 666,
    }
}
console.log(abc);
//  当混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么可以成功合并

