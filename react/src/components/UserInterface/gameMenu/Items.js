import ItemSlot from "./slots/ItemSlot"

function displayItems(){
  const items = [] //will need to fetch and save this to state
  for (let i = 0; i < 50; i++) {
    items[i] = <ItemSlot item={items[i]} /> //this is clearly wrong, but you get the idea
  }
}

function Items(){

  return <div id="items">
    <h2>Items</h2>
      <div id="itemSlots"> {/* css grid, 5 rows of 10 */}
        {displayItems()}
      </div>
    </div>
}

export default Items;