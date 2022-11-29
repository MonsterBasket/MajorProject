import ArmourSlot from "./slots/ArmourSlot"

function Armour(){

  return <div id="armour">
    <h2>Armour</h2>
    <div id="head"><h4>Head</h4><ArmourSlot /></div>
    <div id="body"><h4>Body</h4><ArmourSlot /></div>
    <div id="legs"><h4>Legs</h4><ArmourSlot /></div>
    <div id="feet"><h4>Feet</h4><ArmourSlot /></div>
    <div id="hands"><h4>Hands</h4><ArmourSlot /></div>
    <div id="weapon"><h4>Weapon</h4><ArmourSlot /></div>
    <div id="offHand"><h4>Off-Hand</h4><ArmourSlot /></div>
    <div id="ring1"><h4>Left Ring</h4><ArmourSlot /></div>
    <div id="ring2"><h4>Right Ring</h4><ArmourSlot /></div>
    </div>
}

export default Armour;