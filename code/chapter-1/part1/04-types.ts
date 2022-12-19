// * object 表示一个对象
let a: object
a = {}
a = function (){}

// * {} 用来指定对象中可以包含哪些属性
// * 语法: {属性名：属性值...}
// * 在属性名后边加上? 表示属性是可选的
let b: {
    name: string
    age?: number
}

b = {
    name: 'zgb',
}

// * [propName: string]: any 表示任意类型的属性
let c: {
    name: string
    [propName: string]: any
}

c = {
    name: 'zs',
    age: 10,
    gender: 'man'
}

/**
 * 设置函数结构的类型声明
 * 语法: （形参:类型，形参:类型...）=>返回值
 */
let d: (a: number,b: number)=>number;
d = function (n1,n2): number{
    return n1 + n2
}

/**
 * 数组的类型声明
 * 语法1 类型[]
 * 语法2 Array<类型>
 */
let e: string[]
e = ['a','b','c']

let f: number[]

let g: Array<number>
g = [1,2,3]

let h: any[]

/**
 * 元组,元组就是固定长度的数组
 * 语法 [类型，类型，类型]
 */
let i: [string,string]
i = ['hey','hello']

/**
 * enum 枚举
 *
 */
enum Gender{
    Male ,
    Female
}

let j: {name: string, gender: Gender}
j = {
    name: 'zgb',
    gender: Gender.Male
}

console.log(j.gender === Gender.Male)

// * &表示同时
let k: {name:string} & {age:number}
k = {
    name: 'zgb',
    age: 22
}

// * 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let z:myType
let x:myType
let y:myType