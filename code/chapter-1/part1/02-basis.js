// * 声明一个变量a,同时指定他的类型为number
var a;
// * a的类型设置为了number,在以后的使用过程中a值只能是数字
a = 10;
a = 33;
// ! 下行代码会报错,因为变量a的类型为number,不能赋值字符串
// ? a = 'string'
// * 声明完变量直接赋值
// ? let c: boolean = true
// * 如果变量的声明和赋值是同时进行的,TS可以自动对变量进行类型检测
var c = false;
c = true;
// * JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
sum(123, 321);
// * console.log(sum(100, 200)); //300
// * console.log(sum(100,'200')) //"100200"
