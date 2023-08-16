// 1. Record  以typeof格式快速创建一个类型，此类型包含一组指定的属性且都是必填

type Coord = Record<'x' | 'y', number>;
/* 等同于 */
type Coord1 = {
    x: number;
    y: number;
}


// 2. Partial   将类型定义的所有属性都修改为可选
type Coord2 = Partial<Record<'x' | 'y', number>>;
/* 等同于 */
type Coord3 = {
    x?: number;
    y?: number;
}


// 3. Readonly  将所有属性定义为只读
type Coord4 = Readonly<Record<'x' | 'y', number>>;


// 4. Pick  从类型定义的属性中，选取指定一组属性，返回一个新的类型定义
type CoordTest = Record<'x' | 'y', number>;
type CoordTestPro = Pick<CoordTest, 'x'>;
/* 等同于 */
type CoordTestIt = {
    x: number;       //  选取指定一组属性
}