import Enemy from "../characters/Enemy";

function mobs(num){
  let map = [];
  switch(num){
    case "CLEAN":
      <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "TEST":
      <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "0101":
      <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "0201":
      <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "0301":
      <>
        <Enemy type="skeleton" posInit={[1000,500]} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Enemy type="skeleton" posInit={[600,400]} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
  }
  return map;
}
export default mobs;
