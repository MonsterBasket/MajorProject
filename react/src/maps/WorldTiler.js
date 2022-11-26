function WorldTiler(props){
  const mapCoords = props.coords[0];
  const mapCoords2 = props.coords[1];
  const mapCoords3 = props.coords[2];
  const mapColliders = props.coords[3];

  function childStyle(x, y) {
    return { backgroundPosition: `${x * -16}px ${y * -16}px`}
  }
  const mapGrid = { //this will need to be passed in if I ever want different map sizes
    gridTemplateColumns: `repeat(40, 48px)`,
    gridTemplateRows: `repeat(23, 48px)`
  }


  return <>
    <div className="mapGrid" style={mapGrid}>
      {mapCoords.map((item, index) => <div key={index} className="childStyle" style={childStyle(item[0], item[1])}>
        {mapCoords2[index] == 0 ? "" : <div className="secondChildStyle" style={childStyle(mapCoords2[index][0], mapCoords2[index][1])}></div>}
        {mapColliders[index] == 0 ? "" : <div className="collider secondChildStyle" style={childStyle(mapColliders[index][0], mapColliders[index][1])}></div>}
      </div>)}
    </div>
    {props.children}
    <div className="mapGrid highZ" style={mapGrid}>
      {mapCoords3.map((item, index) => mapCoords3[index] == 0 ? <div key={`2ndLayer${index}`}/> 
      : <div key={`2ndLayer${index}`} className="childStyle" style={childStyle(mapCoords3[index][0], mapCoords3[index][1])}></div>)}
    </div>
  </>
}

export default WorldTiler