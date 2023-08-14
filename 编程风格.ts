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