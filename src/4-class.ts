export {}
/**
 * 类
 */
// 存取器
class Animal {
  constructor(name: string) {
    this.name = name
  }
  // getter
  get name() {
    return '名字'
  }
  // setter
  set name(value: string) {
    console.log('setter: ' + value)
  }
}

let animal = new Animal('monkey')
console.log(animal.name) // monkey
animal.name = 'mk' // setter: mk

// 类的兼容性

class Animal1 {
  name: string
}

class Bird extends Animal1 {
  swing: number
}
let a: Animal1
a = new Bird()

// 访问修饰符
class Person {
  public name
  private age
  protected sex
  public constructor(name: string, age: number, sex: string) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

let person1 = new Person('jacky', 22, 'man')
person1.name = 'monkey' // name值可以访问且修改
// person1.age // Property 'age' is private and only accessible within class 'Person'.
// person1.sex // Property 'sex' is private and only accessible within class 'Person'.

// protected 修饰
class Person1 extends Person {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex)
    // console.log(this.name, this.age, this.sex) // Property 'age' is private and only accessible within class 'Person'.
  }
}

// 参数属性
// 同时给类中定义属性的同时赋值
class Animal2 {
  constructor(public name: string) {} // 简洁形式
}
console.log(new Animal2('animal2').name) // animal2
class Animal3 {
  public name
  constructor(name: string) {
    this.name = name
  }
}
console.log(new Animal3('animal3').name) // animal3

// readonly
class Animal4 {
  readonly name
  constructor(name: string) {
    this.name = name
  }
}
let animal4 = new Animal4('animal4')
// animal4.name = '5' // Cannot assign to 'name' because it is a read-only property

// 抽象类
// 抽象类是行为的抽象，一般来封装公共属性的方法的，不能被实例化
abstract class CommonAnimal {
  name: string
  abstract speak(): void
}

// static
class Animal5 {
  static sayHi() {
    console.log('Hello Animal5')
  }
}
Animal5.sayHi()
