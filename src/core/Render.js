/**
 * 渲染类
 */

const wrapper = document.getElementById("root");
class Render {
  constructor(options, direction = "up", documentType = "div") {
    const DOM = document.createElement(documentType);
    DOM.classList.add("common");
    this.renderType = options;
    if (options) {
      DOM.classList.add(this.renderType);
    }
    this.DOM = DOM;
    this.direction = direction;
    Render.Wrapper.append(this.DOM);
  }

  render(left, top, options, direction) {
    const DIR = {
      left: "rotateZ(-90deg)",
      right: "rotateZ(90deg)",
      up: "rotateZ(0deg)",
      down: "rotateZ(180deg)"
    };

    this.DOM.style.left = left + "px";
    this.DOM.style.top = top + "px";
    if (options !== this.renderType && options) {
      this.DOM.classList.replace(this.renderType, options);
      this.renderType = options;
    }

    this.DOM.style.transform = DIR[this.direction];
  }

  changeDirection(direction) {
    this.DOM.style.transform = direction;
    this.direction = direction;
  }

  remove() {
    this.DOM.remove();
  }

  create(options, documentType = "div") {
    const DOM = document.createElement(documentType);
    DOM.classList.add("common");
    if (options) {
      DOM.classList.add(options);
    }
    return DOM;
  }

  replace(DOM) {
    this.remove();
    this.DOM = DOM;
    Render.Wrapper.append(this.DOM);
  }
}
Render.Wrapper = wrapper;

export default Render;
