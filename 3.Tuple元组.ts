// 元组可以限制数组元素的个数和类型，适合用来实现多值返回，元组用于保存定长数据类型的数据

let xx: [string, number];  // 类型必须匹配，且个数为2
xx = ['hello', 10];

// 如果一个数组中可能有多种类型，数量和类型都不确定，那就直接 any[]
let yy: any[];
yy = [1, 2, 'str', { a: 'q' }];

// 元组支持解构赋值
const employee: [number, string] = [1, 'zyy'];
let [id, username] = employee;
console.log(`${id + ' ' + username}`);

// 可选元素 剩余元素
const optionalTuple: [string, boolean?] = ['123'];  // boolean值是可选属性
const optionalTuple2: [string, ...any[]] = ['123', { 'name': 'zyy' }, [1, 2, 3]]

// 例： 利用元组类型可选元素的特性来定义一个元组类型的坐标点
type Point = [number, number?, number?];
const x: Point = [10];          // 一维坐标点
const y: Point = [10, 20];      // 二维坐标点
const z: Point = [10, 20, 30];  // 三维坐标点

// 只读的元组
const point: readonly [number, number] = [10, 20];  
// 使用readonly关键字修饰元组类型后，任何企图修改元组中元素的操作都会抛出异常

