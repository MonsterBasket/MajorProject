import selectAnimation from "../helpers/selectAnimation"

function Player({pos, velocity, lastDirection}){

  const style = selectAnimation(pos, velocity, lastDirection);

  return <div id="player" className="character" style={style}></div>
}

export default Player;