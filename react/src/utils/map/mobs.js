import Walker from "../../components/Characters/Walker";

function mobs(num, retEnemyPos, attackPos, playerPos, shift=[0,0]){
  const style = {
    left: `${shift[0]}px`,
    top: `${shift[1]}px`
  }

  let map = [];
  switch(num){
    case "CLEAN":
      map = <>
      {/*         key           id      enemy atk   enemy hp     player attack pos     enemy type     always the same      starting pos      returns current pos       if randomPath is true, the enemy will randomly walk anywhere within these coords */}
      {/*                                                                                                                                                              else it's a set path [x, y, time] time includes walking, so if you want it to wait you need to account for the time it takes to walk there */}
        <Walker key="CLEAN1" id="CLEAN1" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Walker key="CLEAN2" id="CLEAN2" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[600,400]} retEnemyPos={retEnemyPos} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case "TEST":
      map = <>
        <Walker key="TEST1" id="TEST1" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Walker key="TEST2" id="TEST2" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[600,400]} retEnemyPos={retEnemyPos} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case 10101:
      map = <>
        <Walker key="101011" id="101011" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Walker key="101012" id="101012" attack={5} health={20} attackPos={attackPos} playerPos={playerPos} type="skeleton" currentMap={num} posInit={[600,400]} retEnemyPos={retEnemyPos} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
      </>
    break;
    case 10201:
      map = <>
        <Walker key="102011" id="102011" attack={10} health={30} attackPos={attackPos} playerPos={playerPos} type="blueSkeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[100,100],[1800,900]]} randomPath={true}/>
      </>
    break;
    case 10301:
      map = <>
        <Walker key="103011" id="103011" attack={15} health={40} attackPos={attackPos} playerPos={playerPos} type="redSkeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[100,100],[1800,900]]} randomPath={true}/>
        <Walker key="103012" id="103012" attack={15} health={40} attackPos={attackPos} playerPos={playerPos} type="redSkeleton" currentMap={num} posInit={[600,400]} retEnemyPos={retEnemyPos} patrol={[[600,400, 5],[600,500,3],[400,400,5],[400,500,3]]}/>
        <Walker key="103013" id="103013" attack={15} health={40} attackPos={attackPos} playerPos={playerPos} type="redSkeleton" currentMap={num} posInit={[1000,500]} retEnemyPos={retEnemyPos} patrol={[[1000,500, 5]]}/>
      </>
    break;
    default:
      map = <></>
  }
  return <div className="monsterLayer" style={style}>{map}</div>;
}
export default mobs;
