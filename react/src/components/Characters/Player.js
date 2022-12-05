import selectAnimation from "../../utils/player/selectAnimation"

function Player({pos, velocity, lastDirection, role}){

  const style = selectAnimation(pos, velocity, lastDirection);

  return <div id="player" className={`character ${role}`} style={style}></div>
}

export default Player;