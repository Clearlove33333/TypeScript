// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


// 游戏控制器,控制其他所有类
class GameControl{
    // * 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性来存储🐍的移动方向(也就是按键的方向)
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏的初始化方法,调用后游戏开始
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 调用run,使蛇移动
        this.run()
    }

    /**
     *
     * @param event
     * ArrowUp Up
     * ArrowDown Down
     * ArrowLeft Left
     * ArrowRight Right
     */

    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 检查event.key是否合法(用户是否按下正确按键)

        // 修改方向direction值
        this.direction = event.key;
    }

    // 创建控制🐍移动的方法
    run(){
        // * 根据this.direction来使🐍的位置改变
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据方向修改X值Y值
        switch (this.direction){
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        // 检测蛇是否吃到了食物
        // * 蛇头的坐标等于 食物的坐标则吃到了
        this.checkEat(X,Y);

        // 修改X值和Y值
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            // 进入到catch,说明出现了异常,游戏结束,弹出一个提示消息
            // @ts-ignore
            alert(e.message + '游戏结束!');
            // 将isLive设置为false
            this.isLive = false

        }


        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法,用来检测蛇是否吃到食物
    checkEat(X:number,Y:number){
         if(X === this.food.X && Y === this.food.Y){
             console.log('吃到食物了!')
             // 食物的位置要进行重置
             this.food.change();
             // 分数增加
             this.scorePanel.addScore();
             // 蛇增加一节长度
             this.snake.addBody()
         }
    }
}

export default GameControl