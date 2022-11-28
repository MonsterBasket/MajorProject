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

  // finding colliders around player
  const index = (Math.floor((y + 30) / 48) * 40) + Math.ceil((x + 10) / 48) - 1;
  const up = index < 40 ? 0 : map[index - 40];
  const down = index > 880 ? 0 : map[index + 40];
  const left = index % 40 < 0 ? 0 : map[index - 1];
  const right = index % 40 > 38 ? 0 : map[index + 1];
  const onPos = map[index]

  function check(array, value){
    return array.some((element) => element[0] == value[0] && element[1] == value[1])
  }

  //straight blocks
  colliders.up    = up    == 0 ? true : !(check([[0,2],[1,2],[2,2],[1,1]], up) &&    ((y + 30) % 48) < 10);
  colliders.down  = down  == 0 ? true : !(check([[1,1],[0,0],[1,0],[2,0]], down) &&  ((y + 30) % 48) > 38);
  colliders.left  = left  == 0 ? true : !(check([[2,2],[1,1],[2,1],[2,0]], left) &&  ((x + 10) % 48) < 10);
  colliders.right = right == 0 ? true : !(check([[0,2],[0,1],[1,1],[0,0]], right) && ((x + 10) % 48) > 38);

  // console.log(index, x, y)
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
