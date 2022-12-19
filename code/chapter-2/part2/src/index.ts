// 引入样式
import './style/index.less'

// 导入类模块
import Food from './modules/Food'
import ScorePanel from "./modules/ScorePanel";
import GameControl from "./modules/GameControl";
const gameControl = new GameControl();

setInterval(()=>{
    console.log(gameControl.direction);
},1000)