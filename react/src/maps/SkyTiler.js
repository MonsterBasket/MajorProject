function SkyTiler(props){
  const mapCoords3 = props.coords[2];


  function childStyle(x, y) {
    return { backgroundPosition: `${x * -16}px ${y * -16}px`}
  }
  const mapGrid = { //this will need to be passed in if I ever want different map sizes
    gridTemplateColumns: `repeat(40, 48px)`,
    gridTemplateRows: `repeat(23, 48px)`
  }

  return <div className="mapGrid highZ" style={mapGrid}>
  {mapCoords3.map((item, index) => mapCoords3[index] == 0 ? <div key={`2ndLayer${index}`}/> 
  : <div key={`2ndLayer${index}`} className="childStyle" style={childStyle(mapCoords3[index][0], mapCoords3[index][1])}></div>)}
</div>

}

export default SkyTiler