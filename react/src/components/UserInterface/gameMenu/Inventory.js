import ItemSlot from "./slots/ItemSlot"

function displayItems(){
  const items = [] //will need to fetch and save this to state
  for (let i = 0; i < 50; i++) {
    items[i] = <ItemSlot /> //this is clearly wrong, but you get the idea
  }
}

function Inventory(){

  return <div id="inventory">
    <h2>Inventory</h2>
      <div id="inventorySlots"> {/* css grid, 5 rows of 10 */}
        {displayItems()}
      </div>
    </div>
}

export default Inventory;