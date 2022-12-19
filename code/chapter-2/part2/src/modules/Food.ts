//  定义食物类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        // ! 非空断言,表示值不会为空或undefined
        this.element = document.getElementById('food')!
    }

    // 定义一个获取食物 X轴 坐标方法
    get X(){
        return this.element.offsetLeft
    }

    // 定义一个获取食物 Y轴 坐标方法
    get Y(){
        return this.element.offsetTop
    }

    // 修改食物的位置
    change(){
        // 生成一个随机的位置
        // *  食物最大位置 = 304整体长度- 边框长度2 * 2 - 食物本身长度10 = 304-14 =290
        // 食物位置最小0 最大290
        // 🐍移动一次就是一格,一格的大小为10PX,食物坐标必须整数(整10倍)
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left +'px'
    }
}
// food-测试代码
// const food = new Food();
// console.log(food.X,food.Y)
// food.change();
// console.log(food)

export default Food;