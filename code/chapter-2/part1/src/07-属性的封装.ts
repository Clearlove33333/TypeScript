(function (){

    // 定义一个表示人的类
    class Person{
        // TS可以在属性前添加属性的修饰符
        /**
         *  *  public 修饰的属性可以在任意位置访问(修改) 默认值
         *  *  private 私有属性, 私有属性只能在类内部进行访问(修改)
         *  *  - 通过在类中添加方法使得私有属性可以被外界访问
         *  *  protected 受包含的属性,只能在当前类和当前类的子类中访问
         */
        _name: string;
        private _age: number;

        constructor(name:string,age:number) {
            this._name = name;
            this._age = age
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
        get age(){
            console.log('get方法被执行了')
            return this._age
        }

        // * Ts中设置setter方法
        set age(value){
            this._age = value
        }
    }
    const per = new Person('孙悟空',18);
    // ? get 通过 = 修改值
    per.age = 10
    console.log(per.age)

    /**
     *   现在属性是在对象中设置的, 属性可以任意的被修改
     *   !  属性可以任意被修改将会导致对象中的数据非常不安全
     */
    //per._name = 'sb'
    // console.log(per.getAge())
    // per.setAge(10)
    // console.log(per.getAge())

    class A{
        // 只能在父子类中访问,出了父子类范围,用实例无法访问
        protected num:number

        constructor(num:number) {
            this.num = num
        }
    }

    class B extends A{

        test(){
            console.log(this.num)
        }
    }

    class C{
        // 可以直接将属性定义在构造函数中
        // * 适用于简单的属性,如果多属性则可读性变差
        constructor(public name:string,public age:number) {
        }
    }

})()