import Enemy from "../characters/Enemy";

function mobs(num, shift=[0,0]){
  const style = {
    left: `${shift[0]}px`,
    top: `${shift[1]}px`
  }

  let map = [];
  switch(num){
    case "CLEAN":
      map = <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "TEST":
      map = <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "10101":
      map = <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "10201":
      map = <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "10301":
      map = <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
  }
  return <div style={style}>{map}</div>;
}
export default mobs;
