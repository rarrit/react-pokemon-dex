export const TypeAttr = (type) => {
  switch (type) {
    case "불꽃":
      return "fire";
    case "물":
      return "water";
    case "풀":
      return "grass";
    case "전기":
      return "electric";
    case "벌레":
      return "grass";
    case "격투":
      return "fight";
    case "독":
      return "poison";
    case "땅":
      return "ground";
    case "바위":
      return "ground";
    case "비행":
      return "ground";
    case "에스퍼":
      return "esper";
    case "고스트":
      return "ghost";
    case "얼음":
      return "water";
    case "드래곤":
      return "dragon";
    case "페어리":
      return "normal";
    default:
      return "normal";
  }
};

export const TypeBg = (type) => {
  switch (type) {
    case "fire":
      return "/assets/img/bg/fire.png";
    case "water":
      return "/assets/img/bg/water.png";
    case "grass":
      return "/assets/img/bg/grass.png";
    case "electric":
      return "/assets/img/bg/electric.png";
    case "bug":
      return "/assets/img/bg/bug.png";
    case "fight":
      return "/assets/img/bg/fight.png";
    case "poison":
      return "/assets/img/bg/poison.png";
    case "ground":
      return "/assets/img/bg/ground.png";
    case "rock":
      return "/assets/img/bg/rock.png";
    case "fly":
      return "/assets/img/bg/fly.png";
    case "esper":
      return "/assets/img/bg/esper.png";
    case "ghost":
      return "/assets/img/bg/ghost.png";
    case "ice":
      return "/assets/img/bg/ice.png";
    case "dragon":
      return "/assets/img/bg/dragon.png";
    case "fairy":
      return "/assets/img/bg/fairy.png";
    default:
      return "/assets/img/bg/normal.png";
  }
};