export {}
// 对象的形状
interface Person1 {
  name: string
  age: number
}
let person1: Person1 = {
  name: 'jacky',
  age: 23,
}

// 描述行为的抽象
interface AnimalLike {
  eat(): void
  move(): void
}

interface PersonLike extends AnimalLike {
  speak(): void
}

class Human implements PersonLike {
  speak() {}
  eat() {}
  move() {}
}

class Animal1 {
  constructor(public name: string) {}
  age: number
}

class Animal2 {
  constructor(public age: number) {}
}

interface WithNameClass {
  new (name: string): Animal1
}

function createClass(classname: WithNameClass, name: string) {
  return new classname(name)
}

let instance1 = createClass(Animal1, 'monkey')
// let instance2 = createClass(Animal2, 'monkey') // 没有name属性则报错

// 其它任意属性
interface Person2 {
  readonly id: number
  [propName: string]: any //任意属性
}
