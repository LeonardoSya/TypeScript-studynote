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