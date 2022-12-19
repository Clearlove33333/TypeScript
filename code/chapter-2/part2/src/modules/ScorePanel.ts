// * 定义积分牌类
class ScorePanel{
    score = 1;
    level = 1;

    // 分数和等级所在的元素,在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量来限制等级
    maxLevel: number;
    // 设置一个变量表示多少分升级
    upScore: number;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    // 设置一个加分的方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是否升级
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    // 设置提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

// score-level-test
// const score = new ScorePanel(10,10);
// // score.addScore()
// // score.levelup()
// // console.log(score)
// for(let i = 0;i<200;i++){
//     score.addScore()
// }

export default  ScorePanel