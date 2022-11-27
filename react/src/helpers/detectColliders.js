import maps from "../maps/maps";

function detectColliders(currentMap, x, y){

  const colliders = {
    up: true,
    down: true,
    left: true,
    right: true,
    ul: true,
    ur: true,
    dl: true,
    dr: true
  }
  const map = maps(currentMap)[3];

  const index = (Math.floor(y / 48) * 40) + Math.ceil(x / 48);
  const up = map[index - 40];
  const down = map[index + 40];
  const left = map[index - 1];
  const right = map[index + 1];

  colliders.up =    [[0,2],[1,2],[2,2],[1,1]].includes(up)    ? false : true;
  colliders.down =  [[1,1],[0,0],[1,0],[2,0]].includes(down)  ? false : true;
  colliders.left =  [[2,2],[1,1],[2,1],[2,0]].includes(left)  ? false : true;

  // console.log(index)
  // debugger
return colliders;
}

export default detectColliders;

// ◣ = [0,2] = dl
// ⬓ = [1,2] = d
// ◢ = [2,2] = dr
// ◧ = [0,1] = l
// ■ = [1,1] = whole
// ◨ = [2,1] = r
// ◤ = [0,0] = ul
// ⬒ = [1,0] = u
// ◥ = [2,0] = ur
