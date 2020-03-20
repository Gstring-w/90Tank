import Move from "../core/Move";


class Tank extends Move {
    /**
     * 
     * @param {*} blood 血量
     * @param {*} birthPlace 出生地 包括left top
     * @param {*} renderType class类型
     */
  constructor(blood,birthPlace,renderType,speed,life) {
    super(
        birthPlace.left,
        birthPlace.top,
        speed,
        speed,
        renderType
    );
    this.blood = blood; // 生命
    this.life = life;
    this.render.render(this.left,this.top)
    this.renderType = renderType

    this.birthPlace = birthPlace
  }

  /**
   * 受到攻击
   */
  attacked(blood) {
    this.blood -= blood;
    if (this.blood <= 0) {
      this.explode();
    }
  }

  /**
   * 💥爆炸
   */
  explode() {
    this.render.render(this.left, this.right, "explode-tank");
    this.life--;
    this.timer = setTimeout(()=>{
      if(this.life > 0){
        this._appear();
      }else {
        alert('game over')
      }
    },1000)
  }

  /**
   * 坦克新生
   */
  _appear(){
    this._remake();
    this.render.render(this.left,this.right,'appear');
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      this.render.render(this.left,this.right,this.renderType);
    },1000)
  }

  /**
   * 坦克死亡复位
   */
  _remake() {
    this.left = this.birthPlace.left;
    this.top = this.birthPlace.top;
    this.render.render(this.left, this.top);
  }
}

export default Tank