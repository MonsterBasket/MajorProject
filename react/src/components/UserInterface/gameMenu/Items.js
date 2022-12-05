import "../windows.css"
import "../hud.css"

function Items({items}){
  
  function displayItems(items){
    const slots = [] //will need to fetch and save this to state
    for (let i = 1; i < 51; i++) {
      slots[i] = <div key={`slot${i}`} className="itemSlot"></div>
    }
    items.map(item => {
      if(!isNaN(item.slot))
      slots[+item.slot] = <div key={`slot${item.slot}`} className="itemSlot">{item.name}</div>
    })
    return slots
  }
    
  return <>
    <h2>Items</h2>
      <div id="itemSlots"> {/* css grid, 5 rows of 10 */}
        {displayItems(items)}
      </div>
    </>
}

export default Items;