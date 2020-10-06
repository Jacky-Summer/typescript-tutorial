// 联合类型（Union Types）表示取值可以为多种类型中的一种。使用一个|分割符来分割多种类型
let foo: string | number | boolean
foo = 'test'
foo = 3
foo = true

// 访问联合类型的属性或方法
function getString(sth: string | number): string {
  // String和Number各自独有的方法这里就不能调用
  return sth.toString() // Number和String类都有 toString方法
}

// 交叉类型
interface IPerson {
  id: string
  age: number
}

interface IWorker {
  companyId: string
}

type IStaff = IPerson & IWorker

const staff: IStaff = { id: '007', age: 24, companyId: '1' }

// 类型别名
type Message = string | string[]

let getMsg = (message: Message) => {
  return message
}

type Weather = 'SPRING' | 'SUMMER' | 'AUTUMN' | 'WINTER'
let weather1: Weather = 'SPRING'
let weather2: Weather = 'AUTUMN'
