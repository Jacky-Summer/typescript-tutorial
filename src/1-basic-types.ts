/**
 * 基础类型
 */
{
  // Number 类型
  let num: number = 2

  // Boolean 类型
  let isShow: boolean = true

  // String 类型
  let str: string = 'hello'

  // Array 类型
  let arr1: number[] = [1, 2, 3]
  let arr2: Array<number> = [2, 3, 4]

  // Any 类型
  let foo: any = 'hello'
  foo = 12
  foo = false

  // Null 和 Undefined 类型

  let test1: undefined = undefined
  let test2: null = null
  // null和undefined可以赋值给任意类型的变量
  let test3: number
  let test4: string
  // test3 = null
  // test4 = undefined

  // Void 类型
  let test5: void = undefined // 声明一个 void 类型的变量没有什么用，因为它的值只能为 undefined 或 null
  function testFunc(): void {} // 函数没有返回值

  // Never 类型
  function bar(): never {
    throw new Error('never reach')
  }

  // Unknown 类型
  let value: unknown
  value = 123
  value = 'Hello'
  value = true

  let value1: unknown = value
  let value2: any = value
  // let value3: boolean = value // Error
  // let value4: number = value // Error
  // let value5: string = value // Error
  // let value6: object = value // Error
  // let value7: any[] = value // Error
  // let value8: Function = value // Error

  // Tuple 类型
  let tupleArr1: [string, number] = ['hello', 10]
  // let tupleArr2: [string, number] = [10, 'hello'] // Error

  // Enum 类型
  enum Season {
    Spring,
    Summer,
    Autumn,
    Winter,
  }
  let a: Season = Season.Spring
  let b: Season = Season.Summer
  let c: Season = Season.Autumn
  let d: Season = Season.Winter
  console.log(a, b, c, d) // 0 1 2 3
}
