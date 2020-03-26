import Tank from "../core/Tank";

class PlayerTank extends Tank {
  constructor(type = "1") {
    const player = PlayerTank.PlayerType[type];
    super(
      PlayerTank.PlayerBlood,
      { left: player.initLeft, top: player.initTop },
      player.DOMoptions,
      PlayerTank.PlayerSpeed,
      PlayerTank.PlayerLife
    );
    this.playerInfo = player;
    this.addKeyBoard();
  }

  addKeyBoard() {
    const HASH = {
      left: { left: -1, top: 0 },
      right: { left: +1, top: 0 },
      up: { left: 0, top: -1 },
      down: { left: 0, top: +1 }
    };
    document.addEventListener(
      "keypress",
      e => {
        const direction = this.playerInfo.keyboard[e.key];
        this.render.changeDirection(direction)
        this.move(this.playerInfo.DOMoptions,direction);
      },
      false
    );
  }

}

PlayerTank.PlayerLife = 10; // 10条命
PlayerTank.PlayerBlood = 1;
PlayerTank.PlayerSpeed = 10;
PlayerTank.Width = 40;
PlayerTank.PlayerType = {
  1: {
    DOMoptions: "yellow-tank",
    initLeft: "300",
    initTop: "360",
    keyboard: {
      a: "left",
      s: "down",
      w: "up",
      d: "right"
    }
  },
  // TODO: player2的按键需要调整
  2: {
    DOMoptions: "green-tank",
    initLeft: "400",
    initTop: "360",
    keyboard: {
      a: "left",
      s: "down",
      w: "up",
      d: "right"
    }
  }
};

export default PlayerTank;
