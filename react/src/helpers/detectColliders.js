import maps from "../maps/maps";

function detectColliders(currentMap, x, y){
  const colliders = {
    up: true,
    down: true,
    left: true,
    right: true,
    ul: true, //up and then left
    ur: true,
    lu: true, //left and then up
    ru: true,
    dl: true,
    dr: true,
    ld: true,
    rd: true,
    dul: true, //diagonal ul (◤)
    dur: true,
    ddl: true,
    ddr: true,
    block: true,
    slow: true
  }
  const map = maps(currentMap)[3];

  // finding colliders around player
  const index = (Math.floor((y + 30) / 48) * 40) + Math.ceil((x + 10) / 48) - 1;
  const up    = map[index - 40]; 
  const down  = map[index + 40];
  const left  = map[index - 1];
  const right = map[index + 1];  // these will be 0, undefined, or one of the coordinates in the chart at the bottom
  const ul    = map[index - 41];
  const ur    = map[index - 39];
  const dl    = map[index + 39];
  const dr    = map[index + 41];
  const onPos = map[index]

  function check(array, value){
    return array.some((element) => {if(value) return element[0] == value[0] && element[1] == value[1]})
  }

  // straight blocks
  //   to the side of straight blocks
  //                   false if appropriate collider          && if character is near edge of current tile
  colliders.up    = !(check([[0,2],[1,2],[2,2],[1,1],[3,2]],             up)    && ((y + 30) % 48) < 15);                         // within 15 pixels of top
    colliders.ul  = !(check([[0,2],[1,2],[2,2],[1,1],[3,2],[2,1],[2,3]], ul)    && ((y + 30) % 48) < 15 && ((x + 10) % 48) < 15); // within 15 pixels of top    && within 15 pixels of left
    colliders.ur  = !(check([[0,2],[1,2],[2,2],[1,1],[3,2],[0,1],[0,3]], ur)    && ((y + 30) % 48) < 15 && ((x + 10) % 48) > 33); // within 15 pixels of top    && within 15 pixels of right
  colliders.down  = !(check([[1,1],[0,0],[1,0],[2,0],[3,0]],             down)  && ((y + 30) % 48) > 33);                         // within 15 pixels of bottom
    colliders.dl  = !(check([[1,1],[0,0],[1,0],[2,0],[2,1],[2,3],[3,0]], dl)    && ((y + 30) % 48) > 33 && ((x + 10) % 48) < 15); // within 15 pixels of bottom && within 15 pixels of left
    colliders.dr  = !(check([[1,1],[0,0],[1,0],[2,0],[0,1],[0,3],[3,0]], dr)    && ((y + 30) % 48) > 33 && ((x + 10) % 48) > 33); // within 15 pixels of bottom && within 15 pixels of right
  colliders.left  = !(check([[2,2],[1,1],[2,1],[2,0],[2,3]],             left)  && ((x + 10) % 48) < 15);                         // within 15 pixels of left
    colliders.lu  = !(check([[2,2],[1,1],[2,1],[2,0],[1,2],[3,2],[2,3]], ul)    && ((x + 10) % 48) < 15 && ((y + 30) % 48) < 15); // within 15 pixels of left   && within 15 pixels of top
    colliders.ld  = !(check([[2,2],[1,1],[2,1],[2,0],[1,0],[2,3],[3,0]], dl)    && ((x + 10) % 48) < 15 && ((y + 30) % 48) > 33); // within 15 pixels of left   && within 15 pixels of bottom
  colliders.right = !(check([[0,2],[0,1],[1,1],[0,0],[0,3]],             right) && ((x + 10) % 48) > 33);                         // within 15 pixels of right
    colliders.ru  = !(check([[0,2],[0,1],[1,1],[0,0],[1,2],[3,2],[0,3]], ur)    && ((x + 10) % 48) > 33 && ((y + 30) % 48) < 15); // within 15 pixels of right  && within 15 pixels of top
    colliders.rd  = !(check([[0,2],[0,1],[1,1],[0,0],[1,0],[0,3],[3,0]], dr)    && ((x + 10) % 48) > 33 && ((y + 30) % 48) > 33); // within 15 pixels of right  && within 15 pixels of bottom

  // sides of half sized
  colliders.left  = !(check([[1,2]], left)  && ((y + 30) % 48) > 20) // ⬓ - greater than 20 pixels into top
  colliders.right = !(check([[1,2]], right) && ((y + 30) % 48) > 20) // ⬓ - greater than 20 pixels into top
  colliders.up    = !(check([[0,1]], up)    && ((x + 10) % 48) < 28) // ◧ - greater than 20 pixels into right
  colliders.down  = !(check([[0,1]], down)  && ((x + 10) % 48) < 28) // ◧ - greater than 20 pixels into right
  colliders.up    = !(check([[2,1]], up)    && ((x + 10) % 48) > 20) // ◨ - greater than 20 pixels into left
  colliders.down  = !(check([[2,1]], down)  && ((x + 10) % 48) > 20) // ◨ - greater than 20 pixels into left
  colliders.left  = !(check([[1,0]], left)  && ((y + 30) % 48) < 28) // ⬒ - greater than 20 pixels into bottom
  colliders.right = !(check([[1,0]], right) && ((y + 30) % 48) < 28) // ⬒ - greater than 20 pixels into bottom


  if(onPos) return colliders //ignore the rest of the code is current block is empty

  // escape (if you glitch onto a collider)
  colliders.block = !onPos || !check([[1,1]], onPos)
  colliders.slow  = !onPos || !check([[3,1]], onPos)
  
  // post
  if(check([[1,3]], onPos)){
    // between 5 and 15 pixels from top and within 15 from each side, prevent down movement
    if(15 < ((x + 10) % 48) < 33){ // between 5 and 15 pixels from each side
      colliders.down = !(5  < ((y + 30) % 48) < 15); //between 5 and 15 pixels from top
      colliders.up   = !(33 < ((y + 30) % 48) < 43);
    }
    else if(15 < ((x + 30) % 48) < 33){
      colliders.right = !(5  < ((x + 10) % 48) < 15);
      colliders.left  = !(33 < ((x + 10) % 48) < 33);
    }
  }

  // half sized
  colliders.down  = !(check([[1,2]], onPos) && ((y + 30) % 48) > 15) // ⬓ - greater than 15 pixels into top
  colliders.left  = !(check([[0,1]], onPos) && ((x + 10) % 48) < 33) // ◧ - greater than 15 pixels into right
  colliders.right = !(check([[2,1]], onPos) && ((x + 10) % 48) > 15) // ◨ - greater than 15 pixels into left
  colliders.up    = !(check([[1,0]], onPos) && ((y + 30) % 48) < 15) // ⬒ - greater than 15 pixels into bottom


  // diagonals
  colliders.dul = !onPos || check([[0,0]], onPos) 
  colliders.dur = !onPos || check([[2,0]], onPos) 
  colliders.ddl = !onPos || check([[0,2]], onPos) 
  colliders.ddr = !onPos || check([[2,2]], onPos) 

  console.log(colliders)
  // debugger
return colliders;
}

export default detectColliders;

//   0  1  2  3
// 0 ◤ ⬒ ◥  ▲
// 1 ◧ ⯀ ◨  ╬
// 2 ◣ ⬓ ◢  ▼
// 3 ◄  •  ►

// ◣ = [0,2] = dl
// ⬓ = [1,2] = d
// ◢ = [2,2] = dr
// ◧ = [0,1] = l
// ⯀ = [1,1] = whole
// ◨ = [2,1] = r
// ◤ = [0,0] = ul
// ⬒ = [1,0] = u
// ◥ = [2,0] = ur
// •  = [1,3] = post

// ▼  = [3,2] = d1 (down 1 way)
// ◄  = [0,3] = l1
// ╬  = [3,1] = slow
// ►  = [2,3] = r1
// ▲  = [3,0] = u1