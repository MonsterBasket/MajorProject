import QuestItem from "./slots/QuestItem"

function displayQuests(){
  const quests = [] //fetch and cache quest list
  quests.map((item) => <QuestItem item={item}></QuestItem>)
}

function Quests(){

  return <div id="quests">
    <h2>Quests</h2>
      <div id="questList"> {/* css grid, 5 rows of 10 */}
        {displayQuests()}
      </div>
    </div>
}

export default Quests;