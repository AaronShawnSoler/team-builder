import './App.css';
import {useState, usestate} from 'react';

import Form from './components/Form'
import List from './components/List'

function App() {
  const [team, setTeam] = useState([])

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form team={team} setTeam={setTeam}/>
      <hr/>
      <List team={team}/>
    </div>
  );
}

export default App;
