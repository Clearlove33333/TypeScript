(function (){
    /**
     *   以abstract开头的类是抽象类
     *   抽象类不能用来创建对象
     *   抽象类只能用来继承
     *   抽象类可以添加抽象方法
     */
    abstract class Animal{
        name:string;

        constructor(name:string) {
            this.name = name
        }

        // * 抽象方法
        // * 只能定义在抽象类中,并且子类必须将抽象方法进行重写,不能为空
        // * 使用abstract开头,没有方法体
        abstract sayHello():void;
    }

    class Dog extends Animal{

        sayHello() {
            // 在类的方法中,super就表示当前的父类
            console.log('wanwanwan')
        }

    }

    class Cat extends Animal{
        sayHello() {
            console.log('miamiamia')
        }
    }

    const dog = new Dog('哈哈');
    dog.sayHello();
})()