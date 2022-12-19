"use strict";
// * 使用class关键字来定义一个类
/**
 *   对象主要包含了两个部分
 *         属性
 *         方法
 */
class Person {
    constructor() {
        /**
         *   直接定义的属性是实例属性,需要通过对象的实例去访问
         *   const per = new Person()
         *   per.name()
         *
         *   使用static开头的属性是静态属性(类属性),可以直接通过类去访问
         *   Person.age
         *
         *   readOnly开头表示一个只读的属性,无法修改
         */
        // 定义实例属性
        // readonly name: string = '孙悟空';
        this.name = '孙悟空';
        // 在属性前使用static关键字可以定义类属性(静态属性)
        // static readonly age: number = 18
        this.age = 18;
    }
    // 定义方法
    static sayHello() {
        console.log('HELLO');
    }
}
const per = new Person();
// console.log(per)         // ? 实例属性(per实例访问)
// console.log(Person.age)  // ? 静态属性(static关键字访问)
// per.sayHello();
Person.sayHello();
