// * object 表示一个对象
var a;
a = {};
a = function () { };
// * {} 用来指定对象中可以包含哪些属性
// * 语法: {属性名：属性值...}
// * 在属性名后边加上? 表示属性是可选的
var b;
b = {
    name: 'zgb'
};
// * [propName: string]: any 表示任意类型的属性
var c;
c = {
    name: 'zs',
    age: 10,
    gender: 'man'
};
/**
 * 设置函数结构的类型声明
 * 语法: （形参:类型，形参:类型...）=>返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的类型声明
 * 语法1 类型[]
 * 语法2 Array<类型>
 */
var e;
e = ['a', 'b', 'c'];
var f;
var g;
g = [1, 2, 3];
var h;
/**
 * 元组,元组就是固定长度的数组
 * 语法 [类型，类型，类型]
 */
var i;
i = ['hey', 'hello'];
/**
 * enum 枚举
 *
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var j;
j = {
    name: 'zgb',
    gender: Gender.Male
};
console.log(j.gender === Gender.Male);
