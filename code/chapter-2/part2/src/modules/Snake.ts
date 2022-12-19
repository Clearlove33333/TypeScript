class Snake{
    // 表示🐍头的元素
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    // 获取🐍的容器
    element: HTMLElement

    constructor() {
        // 获取html元素要加！
        // * querySelector只取一个
        this.head = document.querySelector('#snake > div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取🐍的坐标(蛇头坐标)
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    // 设置蛇头坐标
    set X(value){

        // 如果新值和旧值相同,则直接不再返回
        if(this.X === value){
            return
        }

        // X的值合法范围0-290
        if(value < 0 || value > 290){
            // 进入判断 蛇撞墙了
            throw new Error('蛇撞墙了!');
        }

        // 修改X时,实在修改水平坐标。 🐍往水平方向走,则不能水平掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //如果发生掉头, 让蛇继续反方向继续移动
            if(value > this.X){
                //如果新值value大于旧值X， 则说明蛇向右走, 此时发生掉头, 应该使蛇继续向左走
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }


        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px'
        this.checkHitBody()
    }
    set Y(value){

        if(this.Y === value){
            return
        }

        if(value < 0 || value > 290){
            // 进入判断 蛇撞墙了
            throw new Error('蛇撞墙了!');
        }

        // 修改Y轴时，蛇不能上下掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value < this.Y){
                value = this.Y + 10
            }else{
                value = this.Y - 10
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px'
        this.checkHitBody()
    }

    // 🐍增加身体的方法
    addBody(){
        // 向element添加div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 🐍身体移动的方法
    moveBody(){
        /**
         *  *  将后面的身体设置为前边身体的位置
         *  第四节 = 第三节的位置
         *  第三节 = 第二节的位置
         *  第二节 = 蛇头位置
         */
        console.log(this.bodies.length)
        // 一个长度的时候,蛇不能判断后面
        for(let i = this.bodies.length-1; i > 0 ; i--){
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px'
        }
    }

    // 判断蛇是否撞身体
    checkHitBody(){
        for(let i = 1;i < this.bodies.length;i++){
            // * bd是当前每一个身体坐标,this.X是当前蛇头的坐标
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了!')
            }
        }
    }
}

export default Snake