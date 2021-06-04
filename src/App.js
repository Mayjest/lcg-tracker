import './App.css';
import InvestigatorPicker from './arkham/investigators/investigator-picker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Arkham Horror LCG State Tracker
        </p>
      </header>
      <div className="App-body">
        <InvestigatorPicker/>
        <InvestigatorPicker/>
        <InvestigatorPicker/>
        <InvestigatorPicker/>
      </div>
    </div>
  );
}

export default App;
