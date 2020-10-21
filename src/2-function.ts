/**
 * 函数类型
 */
export {}
// 函数声明
function func1(x, y) {
  return x + y
}
function func2(x: number, y: number): number {
  return x + y
}

// 函数表达式
let func3 = function (x, y) {
  return x + y
}
let func4 = function (x: number, y: number): number {
  return x + y
}
// => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let func5: (x: number, y: number) => number = (x, y) => {
  return x + y
}

// 接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数
function getName1(firstName: string, lastName?: string) {
  // 可选参数必须接在必需参数后面
  if (lastName) {
    return `${firstName} ${lastName}`
  } else {
    return firstName
  }
}
let name1 = getName1('jacky')
let name2 = getName1('jacky', 'lin')
console.log(name1, name2)

// 参数默认值
function getName2(firstName: string = 'monkey', lastName: string) {
  return `${firstName} ${lastName}`
}
console.log(getName2('jacky', 'Lin'))
console.log(getName2(undefined, 'Lin')) // monkey Lin

// void 和 never 类型
function func6(): void {
  // return null
}

function func7(): never {
  throw new Error('never reach')
}

// 剩余参数
function push1(arr, ...items) {
  items.forEach(function (item) {
    arr.push(item)
  })
}
let a: any[] = []
push1(a, 1, 2, 3)

function push2(arr: any[], ...items: any[]): void {
  items.forEach(function (item) {
    arr.push(item)
  })
}
let b: any[] = []
push1(b, 1, 2, 3, '5')

// 函数参数为对象（解构）时

// js写法
function add({ one, two }) {
  return one + two
}

const total = add({ one: 1, two: 2 })

// ts 写法
function add1({ one, two }: { one: number; two: number }): number {
  return one + two
}

const three = add1({ one: 1, two: 2 })

// 函数重载
function reverse(x: number): number // 函数定义
function reverse(x: string): string // 函数定义
function reverse(x: number | string): number | string {
  // 函数实现
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  } else {
    return 0
  }
}
