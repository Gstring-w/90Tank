/**
 * 障碍物类
 */
import Render from "./Render";
class Barrier {
  constructor(left, top, DOMoptions) {
    this.left = left;
    this.top = top;
    this.render = new Render(DOMoptions);
    this.render.render(this.left, this, top);
  }
}
Barrier.Width = 800 / 60;
Barrier.Height = 400 / 40;
export default Barrier;
