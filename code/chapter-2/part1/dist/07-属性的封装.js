"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // 定义方法,用来获取私有属性age
        // getAge(){
        //     return this._age
        // }
        // // 定义方法,用来修改私有属性age
        // setAge(value: number){
        //     this._age = value
        // }
        /**
         *   getter方法用来读取属性
         *   setter方法用来设置属性
         *   他们被称为属性的存取器
         *   *  -适用于简单的属性
         */
        // * Ts中设置getter方法
        get age() {
            console.log('get方法被执行了');
            return this._age;
        }
        // * Ts中设置setter方法
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('孙悟空', 18);
    // ? get 通过 = 修改值
    per.age = 10;
    console.log(per.age);
    /**
     *   现在属性是在对象中设置的, 属性可以任意的被修改
     *   !  属性可以任意被修改将会导致对象中的数据非常不安全
     */
    //per._name = 'sb'
    // console.log(per.getAge())
    // per.setAge(10)
    // console.log(per.getAge())
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        // 可以直接将属性定义在构造函数中
        // * 适用于简单的属性,如果多属性则可读性变差
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
