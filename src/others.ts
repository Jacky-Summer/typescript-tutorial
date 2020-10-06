/**
 * 类型变换
 */

// 索引访问操作符
interface Person {
  name: string
  age: number
  job: {
    name: string
  }
  interests: { name: string; level: number }[]
}
let frontendJob: Person['job'] = { name: 'frontend' }
let interests: Person['interests'] = [{ name: 'sing', level: 1 }]
