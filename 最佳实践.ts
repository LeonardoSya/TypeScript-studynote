// 1. 定义接口时，避免出现重复代码，使用extends关键字

interface Person {
    firstName: string;
    lastName: string;
}

interface PersonPro extends Person {
    birth: Date;
}

// 除了extends，也可以使用交叉预算符&

type PersonMax = Person & { address: string };


// 2. 使用 typeof 操作符快速获取配置对象的【形状】

const INIT_OPTIONS = {
    width: 100,
    height: 200,
    color: "#00FF00",
    label: "VGA",
};

// interface Options { ... }
type Options = typeof INIT_OPTIONS;  // 快速获取配置对象的 shape


// 3. 当多个函数拥有相同的类型签名时，提供统一的类型签名

type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
// const get: HTTPFunction = async (url, opts) => { }
// const post: HTTPFunction = async (url, opts) => { }



// 4. 使用更精确的类型 代替字符串类型
interface Album {
    artist: string;
    title: string;
    releaseDate: Date;
    recordingType: "studio" | "live"  // 录制类型是现场版还是录音棚
}

const dangerous: Album = {
    artist: "M·J",
    title: "Dangerous",
    releaseDate: new Date("1991-11-31"),
    recordingType: "studio",
}


// 5. 不要使用Number, String, Boolean, Symbol和Object
// 这些类型表示是非原始的封箱后的对象类型，它们几乎没有在js代码里被正确地使用过
// 应该使用 number, string, boolean和symbol


// 6. 不要为返回值被忽略的回调函数 设置返回值类型any, 而应该设置为void
/* 错误 */
function fn(x: () => void) {
    x();
}
// 使用void相对安全，因为它能防止不小心使用了未经检查的x的返回值

// 另外，不要再回调函数里使用可选参数


//  7. 函数重载 不要因为只有末尾参数不同而编写不同的重载，应该尽可能使用可选参数
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}


// 8. 使用联合类型   不要因为仅某个特定位置上参数类型的不同而定义重载，应该京可能地使用联合类型
interface Moment {
    offset(): number;
    offset(b: number | string): Moment;
}