/**
 * move 小方块类
 */
import Render from "./Render";

class Move {
  constructor(left, top, xSpeed, ySpeed, DOMOptions) {
    this.left = left;
    this.top = top;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.render = new Render(DOMOptions);
  }
}
Move.Range = {
  width: 800,
  height: 400
};
Move.Duration = 16 / 1000;

export default Move;
