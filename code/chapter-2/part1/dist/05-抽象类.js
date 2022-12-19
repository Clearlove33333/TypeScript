"use strict";
(function () {
    /**
     *   以abstract开头的类是抽象类
     *   抽象类不能用来创建对象
     *   抽象类只能用来继承
     *   抽象类可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            // 在类的方法中,super就表示当前的父类
            console.log('wanwanwan');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('miamiamia');
        }
    }
    const dog = new Dog('哈哈');
    dog.sayHello();
})();
