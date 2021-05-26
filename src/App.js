import './App.css';
import ChaosBag from './arkham/chaos-bag/ChaosBag';
import ZeroToken from './arkham/chaos-bag/ZeroToken';
import Minus1Token from './arkham/chaos-bag/Minus1Token';
import Plus1Token from './arkham/chaos-bag/Plus1Token';
import TentaclesToken from './arkham/chaos-bag/TentaclesToken';
import TabletToken from './arkham/chaos-bag/TabletToken';
import RolandBanks from './arkham/investigators/roland-banks/RolandBanks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Arkham Horror LCG State Tracker
        </p>
      </header>
      <div className="App-body">
        <RolandBanks/>
      </div>
    </div>
  );
}

export default App;
