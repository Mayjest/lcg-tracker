import './App.css';
import ZeroToken from './arkham/chaos-bag/ZeroToken'
import Minus1Token from './arkham/chaos-bag/Minus1Token';
import Plus1Token from './arkham/chaos-bag/Plus1Token';
import TentaclesToken from './arkham/chaos-bag/TentaclesToken';
import TabletToken from './arkham/chaos-bag/TabletToken';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Arkham Horror LCG State Tracker
        </p>
      </header>
      <div className="App-body">
      <ZeroToken/>
      <Minus1Token/>
      <Plus1Token/>
      <TentaclesToken/>
      <TabletToken scenarioValue="-2" scenarioDrawEffect="Draw an encounter card"></TabletToken>
      </div>
    </div>
  );
}

export default App;
