/**
 * 泛型是指定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 * 泛型 T 作用域只限于函数内部使用
 *  T（Type）：表示一个 TypeScript 类型
 *  K（Key）：表示对象中的键类型
 *  V（Value）：表示对象中的值类型
 *  E（Element）：表示元素类型
 */
// 泛型类
class GenericNumber<T> {
  name: T
  add: (x: T, y: T) => T
}

let generic = new GenericNumber<number>()
generic.name = 123

// 泛型数组
// 写法1
function func<T>(params: T[]) {
  return params
}
func<string>(['1', '2'])
func<number>([1, 2])

// 写法2
function func1<T>(params: Array<T>) {
  return params
}
func1<string>(['1', '2'])
func1<number>([1, 2])

// 泛型接口 VS 泛型类型别名
// - 接口创建了一个新的名字，它可以在其他任意地方被调用。而类型别名并不创建新的名字，例如报错信息就不会使用别名
// - 类型别名不能被extends和implements，这时我们应该尽量使用接口代替类型别名
// - 当我们需要使用联合类型或者元组类型的时候，类型别名会更合适

// 泛型接口 可以用来约束函数
interface Calculator {
  <T>(a: T, b: T): T
}

let add: Calculator = function (a, b) {
  return a
}

interface Cart<T> {
  list: T[]
}
let cart: Cart<number> = { list: [1, 2, 3] }

// 泛型的别名 type可以定义别名
type Cart2<T> = { list: T[] } | T[]
let c1: Cart2<number> = { list: [1, 2, 3] }
let c2: Cart2<number> = [1, 2, 3]

// 多个泛型 不借助中间变量交换两个变量的值
function swap<T, P>(tuple: [T, P]): [P, T] {
  return [tuple[1], tuple[0]]
}

let ret = swap([1, 'a'])
ret[0].toLowerCase()
ret[1].toFixed(2)

// 默认泛型
function createArray<T = number>(length: number, value: T): T[] {
  let arr: T[] = []
  for (let i = 0; i < length; i++) {
    arr[i] = value
  }
  return arr
}
let arr = createArray(3, 9)

// 泛型约束(继承)
interface WithLength {
  length: number
}
function logger<T extends WithLength>(val: T) {
  console.log(val.length)
}
logger('hello')
logger([1, 2, 3])
// logger(true) // error 没有length属性

// 索引类型查询操作符 keyof

interface Person1 {
  name: string
  age: number
  sex?: string
}
type PersonKey = keyof Person1
function getValueByKey(p: Person1, key: PersonKey) {
  return p[key]
}
let p1: Person1 = { name: 'jacky', age: 18, sex: 'male' }
getValueByKey(p1, 'name')
// getValueByKey(p1, 'randomKey') // error

// 内置的工具类型
// type Partial<T> = {[P in keyof T]?: T[P]}
type PersonSearch = Partial<Person> // 全部变可选

// type Required<T> = { [P in keyof T]-?: T[P] }
type PersonRequired = Required<Person> // 全部变必选

// type ReadOnly<T> = { readonly [P in keyof T]: T[P] }
type PersonReadOnly = Readonly<Person> // 全部变只读

// type Pick<T, K extends keyof T>  = {[P in K]: T[P]}
type PersonSub = Pick<Person, 'name'> // 通过从Type中选择属性Keys的集合来构造类型。

// 接口与类型别名区别：类型别名可以直接给类型，比如string，而接口必须代表对象。
type Girl1 = string

// 类数组
let root = document.getElementById('root')
let children: HTMLCollection = root!.children
let childNodes: NodeListOf<ChildNode> = root!.childNodes
