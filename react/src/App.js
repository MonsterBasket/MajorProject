import './App.css';
import Hud from "./ui/Hud"
import MapMaker from "./maps/MapMaker"
import World from "./maps/World"

function App() {
  return (
    <div className="App">
      {/* <MapMaker /> */}
      <World />
      {/* <Hud /> */}
    </div>
  );
}

export default App;
