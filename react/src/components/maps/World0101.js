function World0101(){

  function childStyle(x, y) {
    return { backgroundPosition: `${x * -16}px ${y * -16}px`}
  }
  function secondChildStyle(x, y) {
    return { backgroundPosition: `${x * -16}px ${y * -16}px`}
  }

  const mapCoords = [[32,62],[33,62],[32,43],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[32,43],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[32,63],[33,63],[34,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[32,64],[33,64],[34,64],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[32,43],[33,43],[34,43],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[32,43],[34,44],[32,43],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[34,45],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[34,45],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[34,46],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[34,47],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63],[33,63]]

  const mapCoords2ndLayer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,[115,77],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,[99,79],[100,79],[101,79],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,[99,80],[100,80],[101,80],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  ]

  return <>
      {mapCoords.map((item, index) => <div key={index} className="childStyle" style={childStyle(item[0], item[1])}>
        {mapCoords2ndLayer[index] == 0 ? "" : <div className="secondChildStyle" style={secondChildStyle(mapCoords2ndLayer[index][0], mapCoords2ndLayer[index][1])}></div>}
      </div>)}
    </>
}

export default World0101