/**
 * move 小方块类
 */
import Render from './Render'


class Move {
  constructor(left, top, xSpeed, ySpeed, DOMOptions) {
    this.left = left;
    this.top = top;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.render = new Render(DOMOptions);
  }

  move(duration = Move.Duration){
      this.left += duration * this.xSpeed;
      this.top += duration * this.ySpeed; 
      if(this.left < 0){
          this.left = 0;
      }
      if(this.top < 0){
        this.top = 0;
      }
      if(this.left > Move.Range.width){
          this.left = Move.Range.width;
      }
      if(this.top > Move.Range.height){
          this.top = Move.Range.height
      }
      this.render.render(this.left,this.top);
  }

  
}
Move.Range = {
  width:800,
  height:400
}
Move.Duration = 16 / 1000;

export default Move;