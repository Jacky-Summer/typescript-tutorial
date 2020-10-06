export {}
/**
 * 类型保护：更明确的判断某个分支作用域中的类型，主要尝试检测属性、方法或原型，以确定如何处理值。
 */
export {}

// 1. typeof
function double(input: string | number | boolean): number {
  // 基本数据类型的类型保护
  if (typeof input === 'string') {
    return input.length
  } else if (typeof input === 'number') {
    return input
  } else {
    return 0
  }
}

// 2. instanceof
class Monkey {
  climb: string
}
class Person {
  sports: string
}
function getAnimalName(animal: Monkey | Person) {
  if (animal instanceof Monkey) {
    console.log(animal.climb)
  } else {
    console.log(animal.sports)
  }
}

// 3. in
class Student {
  name: string
  play: string[]
}
class Teacher {
  name: string
  teach: string
}
type SchoolRole = Student | Teacher
function getRoleInformation(role: SchoolRole) {
  if ('play' in role) {
    console.log(role.play)
  }
  if ('teach' in role) {
    console.log(role.teach)
  }
}

// 有时两个类型有不同的取值，也没有其他可以区分的属性
// 4. 自定义类型保护
interface Bird {
  leg: number
}
interface Dog {
  leg: number
}
function isBird(x: Bird | Dog): x is Bird {
  return x.leg === 2
}
function getAnimal(x: Bird | Dog): string {
  if (isBird(x)) {
    return 'bird'
  } else {
    return 'dog'
  }
}

// null保护：如果开启了strictNullChecks选项的话，那么我们就不能直接调用可能为null的变量上的方法
function getFirstLetter(str: string | null) {
  function log() {
    console.log(str!.trim()) // ! 代表非空断言操作符
  }
  str = str || '' // 经过这句话的处理，str肯定是有值的
  log()
  return str.charAt(0)
}
