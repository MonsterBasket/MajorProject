import { useEffect, useState } from "react"
import { serverUrl } from "../../App"

function DroppedItems(map, refresh){
  const [items, setItems] = useState([])
    
  useEffect(() => {
    axios.get(`${serverUrl}items`, {params: {character_id: 0, world_page: map}})
    .then(res => {
      if(res.status == 200){
        if(res.data.items.length > 0) {
          setItems(res.data.items)
        }
      }
    })
  }, [refresh])

  // will also need to return item id from somewhere back to gameController
  // then have character check for collisions

  const itemsDisplay = items.map(item => { <div
    key={`item${item.id}`} 
    className="worldItem"
    style={{
      left: `${item.world_pos_x}px`,
      top: `${item.world_pos_y}px`,
      backgroundPosition: `${item.img_pos_x * -60}px` `${item.img_pos_y * -60}px`
    }}>
  </div>})

return <>{itemsDisplay}</>
}

export default DroppedItems