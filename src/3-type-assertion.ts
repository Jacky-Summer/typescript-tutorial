/**
 * 类型断言
 */
export {}

interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

// 只能访问共有的属性
function getName(animal: Cat | Fish): string {
  return animal.name
}

// 将 animal 断言成 Fish 就可以解决访问 animal.swim 时报错的问题
function isFish(animal: Cat | Fish): boolean {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 任何类型都可以被断言为 any
;(window as any).randomFoo = 1

// 类型断言第一种方式："尖括号"语法
let value1: any = 'hello'
let value1Length: number = (<string>value1).length

// 类型断言第二种方式：as
let value2: any = 'world'
let value2Length: number = (value2 as string).length
