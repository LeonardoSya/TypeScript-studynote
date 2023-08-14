// 写一个函数，这个函数会返回任何传入的值
function identityTest(args: number): number {
    return args;
}
// 如果我们要编写框架，就要考虑各种返回值的情况，于是可能会有这样的代码：
type idBoolean = (args: boolean) => boolean;
type idString = (args: string) => string;
// 如果用any的话，可能没法检测出这个函数传入的类型和返回的类型不同
// 但是这些代码逻辑是相同的，所以可以采用泛型写法：
function identity1<T>(arg: T): T {
    return arg;
}
// 给identity1添加类型变量T，T帮助我们【捕获用户传入的类型】，之后我们就可以使用这个类型
// 之后我们就可以通过这样的语法调用identity函数
identity1<string>('hello');

// 泛型就是 【创建类型变量用以接受任意类型】。泛型就是【对类型编程】
// 因此，import解决了文件的复用，继承解决了代码的复用，泛型解决了算法的复用

// 泛型在保证类型安全(不丢失类型信息)的同时，可以让函数与多种不同的类型一起工作

function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}
// identity<Number, String>(64, "link")
identity(64, "link")

/*
其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：

K（Key）：表示对象中的键类型；
V（Value）：表示对象中的值类型；
E（Element）：表示元素类型。
*/

// 泛型工具类型

// 1. typeof  
// 在类型上下文中获取变量或属性的类型
interface PersonJack {
    name: string;
    age: number;
}
const jack: PersonJack = { name: 'jack', age: 30 };

type Jack = typeof jack;  // 通过typeof操作符获取jack变量的类型 并赋值给Jack类型变量，之后我们就可以使用Jack类型

const messy: Jack = { name: 'messy', age: 20 }

// 此外，typeof操作符除了可以获取对象的结构类型之外，也可以用来获取函数对象的类型
function toArray(x: number): Array<number> {
    return [x];
}
type Func = typeof toArray;  // -> (x:number)=>number[]

// 2. keyof
// 获取某个类型的键(属性名)的联合类型
interface PersonTest {
    name: string;
    age: number;
}
type K1 = keyof PersonTest;  // name,age
type K2 = keyof PersonTest[];   // length,toString,pop,push,concat,join  所有方法
type K3 = keyof { [x: string]: PersonTest }   // string,number

function propTest<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
// 首先定义T类型，并使用extends关键字约束该类型必须是object类型的子类型(泛型约束)
// 然后使用keyof操作符获取T类型的所有键，利用extends关键字约束K类型必须为keyof T联合类型的子类型
type Todo = {
    id: number;
    text: string;
    done: boolean;
}
const todo: Todo = {
    id: 1,
    text: 'learn',
    done: false,
}
function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const ID = prop(todo, 'id');        // const ID: number
const TEXT = prop(todo, 'text');      // const TEXT: string
const DONE = prop(todo, 'done');      // const DONE: boolean

console.log(ID, TEXT, DONE);   //  1 learn false

// prop函数可以正确地推导出指定键对应的类型，并且阻止我们读取不存在的属性

// 3. in
// 用来遍历枚举类型
type Keys = 'a' | 'b' | 'c';
type Obj = {
    [p in Keys]: any;    //  -> {a:any, b:any, c:any}
}

// 4. infer
// 在条件类型语句中，可以用infer声明一个类型变量并且对他进行使用
type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any;

// 5. extends
// 有时候我们定义泛型不想过于灵活或是想继承某些类，可以用extends关键字添加泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {   // 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });   // 这时我们需要传入符合约束类型的值，必须包含length属性
