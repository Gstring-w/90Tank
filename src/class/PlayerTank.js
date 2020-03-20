import Tank from "../core/Tank";
import Operation from "../core/Operation";

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
    this.Operation = new Operation(this.render, this.left, this.top);
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
    initTop: "360"
  },
  2: {
    DOMoptions: "green-tank",
    initLeft: "400",
    initTop: "360"
  }
};

export default PlayerTank;
