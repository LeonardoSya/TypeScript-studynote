function greeter(person: string) {   // 类型注解   类型注解是一种轻量级的为函数或变量添加约束的方式
    return "hello, " + person;
}
let user = "Jane";
document.body.innerHTML = greeter(user);
// $ tsc index.ts 可以输出一个编译成js的js文件


function sumIt(n: number): number {
    return n;
}

console.log(sumIt(1));