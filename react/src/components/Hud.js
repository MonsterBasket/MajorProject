function Hud(){
  const parentStyle = {
    width: "100%",
    height: "100%",
    background: "none",
    pointerEvents: "none",
    position: "absolute"
  }

  const itemStyle = {
    position: "absolute",
    width: "16px",
    height: "80px",
    right: "0px",
    top: "250px",
    background: "blue"
  }

  const actionStyle = {
    position: "absolute",
    width: "160px",
    height: "16px",
    left: "320px",
    bottom: "0px",
    background: "red"
  }


  return <div style={parentStyle}>
    <div style={itemStyle}></div>
    <div style={actionStyle}></div>
  </div>
}

export default Hud;