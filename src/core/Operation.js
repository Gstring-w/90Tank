/**
 * 操作类 电脑操作
 */

class Operation {
  constructor(render,type = "player") {
    document.addEventListener('keypress',(e)=>{
        console.log(e.key)
        // switch(e.key){
        //     case ''
        // }
    },false)
  }
}

Operation.KeyOperation = {
  up: "w",
  down: "s",
  left: "a",
  right: "d",
  attach: "h"
};

export default Operation;
