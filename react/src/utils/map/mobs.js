import Enemy from "../../components/Characters/Skeleton";

function mobs(num, shift=[0,0]){
  const style = {
    left: `${shift[0]}px`,
    top: `${shift[1]}px`
  }

  let map = [];
  switch(num){
    case "CLEAN":
      map = <>
        <Enemy key="CLEAN1" type="skeleton" currentMap={num} posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy key="CLEAN2" type="skeleton" currentMap={num} posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "TEST":
      map = <>
        <Enemy key="TEST1" type="skeleton" currentMap={num} posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy key="TEST2" type="skeleton" currentMap={num} posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case 10101:
      map = <>
        <Enemy key="101011" type="skeleton" currentMap={num} posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy key="101012" type="skeleton" currentMap={num} posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case 10201:
      map = <>
        <Enemy key="102011" type="skeleton" currentMap={num} posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
      </>
    break;
    case 10301:
      map = <>
        <Enemy key="103011" type="skeleton" currentMap={num} posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy key="103012" type="skeleton" currentMap={num} posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    default:
      map = <></>
  }
  return <div className="monsterLayer" style={style}>{map}</div>;
}
export default mobs;
