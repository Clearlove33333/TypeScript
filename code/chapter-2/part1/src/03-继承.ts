// 立即执行函数,创造单独作用域,避免命名冲突
(function (){
    //  定义一个 animal 类
    class Animal{
        name:string;
        age:number;

        constructor(name:string,age:number) {
            this.name = name;
            this.age = age
        }

        sayHello(){
            console.log('动物在叫')
        }
    }

    /**
     * Dog extends Animal
     *   - 此时, Animal被称为父类,Dog被称为子类
     *   - 使用继承后, 子类将会拥有所有父类的属性和方法
     *   - * 如果希望在子类中添加一些父类没有的属性和方法,可以直接在子类中添加
     *   - * 如果子类中添加了和父类相同的方法,则子类方法会覆盖父类方法
     */
    // * 使Dog类继承Animal类
    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑`)
        }
        sayHello(){
            console.log('wanwanwan')
        }
    }
    // * 使Cat类继承Animal类
    class Cat extends Animal{

    }

    const dog = new Dog('旺财',5);
    const cat = new Cat('咪咪',4);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello()

})()