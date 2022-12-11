import "../UserInterface/windows.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { serverUrl } from "../../App"

function DroppedItems({map, playerPos, items, setItems, character, refItems}){
  const [floorItems, setFloorItems] = useState([])
  const [reprepare, setReprepare] = useState([])
    
  useEffect(() => {
    axios.get(`${serverUrl}item/dropped`, {params: {character_id: character.id, world_page: map}})
    .then(res => {
      if(res.status == 200){
        // filters out the new items that are aready in the list and adds the result to items (I hope)
        const newItems = items.concat(res.data.items.filter(item => items.indexOf(item) < 0))
          setItems(newItems)
          prepareItems(newItems);
      }
    })
  }, [refItems])

  useEffect(prepareItems, [reprepare])

  function prepareItems(){ 
    const filtered = items.filter(item => item.slot == "floor")
    setFloorItems(filtered)
  }

return <>{floorItems.map(item => <DroppedItem key={`${item.name}${Date.now()}`} item={item} items={items} character={character} playerPos={playerPos} floorItems={floorItems} setFloorItems={setFloorItems} setReprepare={setReprepare}/>)}</>
}


function DroppedItem({item, items, character, playerPos, floorItems, setFloorItems, setReprepare}){
  useEffect(playerPickup, [playerPos[0], playerPos[1]])

  function playerPickup(){
    if(Math.abs(playerPos[0] - item.world_pos_x) < 10 && Math.abs(playerPos[1] - item.world_pos_y) < 20){
      item.character_id = character.id;
      for (let i = 1; i < 51; i++) {
        if(!items.some(loopItem => loopItem.slot == i)){
        item.slot = i;
        break
        }
      }
      item.world_pos_x = null;
      item.world_pos_y = null;
      axios.post(`${serverUrl}items`, {item}, {withCredentials: true})
      setFloorItems(floorItems.filter(floorItem => floorItem.id != item.id))
      setReprepare([])
    }
  }

  return <div
  key={`item${item.id}`} 
  className="worldItem"
  style={{
    left: `${item.world_pos_x}px`,
    top: `${item.world_pos_y}px`,
    backgroundPosition: `${item.img_pos_x * -36}px ${item.img_pos_y * -36}px`
  }}>
</div>
}

export default DroppedItems
