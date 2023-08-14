/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-08-13 12:40:32
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-08-14 10:01:30
 * @FilePath: \TypeScript\Interface&Type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Interfaces用来【定义对象的数据类型】

// Interfaces 是对行为的抽象，而具体如何行动需要 由类(class)去实现(implement)

// 因此，接口是一个非常灵活的概念，除了可用于【对类的一部分行为进行抽象】以外，也常用于【对对象的形状(Shape)】进行描述


// 赋值的时候，变量的形状必须和接口的形状保持一致(比如少/多一些属性都是不允许的)


// 只读 可选 任意 
interface Person {
    readonly name: string;   // 只读属性用于限制只能在对象刚刚创建时修改其值
    age?: number;
    [propName: string]: any;    // 用索引签名的形式 定义任意属性
}




// 接口Interface与类型别名Type的区别
// ts的核心原则之一是 对值所具有的结构进行类型检查，而【接口的作用】就是为这些类型命名和代码【定义数据结构】
// type会给一个类型起一个新的名字，type有时候和interface很像，但是它可以作用于基本类型、联合类型、元组以及其他任何你需要手写的类型


// interface 在 Objects中
interface Point2 {
    x: number;
    y: number;
}

// interface 在Function中
interface SetPoint {
    (x: number, y: number): void;
}

// type 在Objects中
type Point3 = {
    x: number;
    y: number;
};

// type 在Function中
type SetPoint2 = (x: number, y: number) => void;


// 与接口不同，类型别名还可以用于其他类型，如基本类型、联合类型、元组
// 但是interface可以定义多次，会被自动合并为单个接口，但是type不可以


// 扩展
// 接口的扩展就是继承，通过extends来实现
interface PointX {
    x: number;
}

interface PointY extends PointX {
    y: number;
}

// 类型别名的扩展就是交叉类型，通过&实现
type PointXX = {
    x: number
}
type PointYY = PointXX & {
    y: number;
}



