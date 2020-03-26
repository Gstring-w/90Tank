/**
 * 敌方tank
 */

import Tank from "../core/Tank";
import Move from "../core/Move";

class EnemyTank extends Tank {
  
  constructor(type) {
    const birth = EnemyTank.RandomBirthPlaces()
    const {blood,render} = EnemyTank.ENUM_TYPE[type];
    super(blood,birth,);
  }
}

// 敌方生成的位置
EnemyTank.BirthPlaces = [
  { left: 0, top: 0 },
  { left: Move.Range.width / 2, top: 0 },
  { left: Move.Range.width, top: 0 }
];
EnemyTank.RandomBirthPlaces = () => {
  const index = (Math.random() * 30) | 0;
  return EnemyTank.BirthPlaces[index];
};

// 敌机类型
EnemyTank.ENUM_TYPE = {
    fast:{
        render:'enemy-fast',
        blood:1,
        speed:2,
        life:4
    },
    yellowBoss:{
        render:'enemy-boss-y',
        blood:3,
        speed:1,
        life:5
    },
    greenBoss:{
        render:'enemy-boss-g',
        blood:4,
        speed:1,
        life:4
    },
    whiteBoss:{
        render:'enemy-boss-w',
        blood:3,
        speed:1
    },
    common:{
        render:'enemy-common',
        blood:1,
        speed:1,
        life:10
    }
}

export default EnemyTank;
