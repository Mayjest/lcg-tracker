import './App.css';
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
