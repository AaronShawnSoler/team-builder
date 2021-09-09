import './App.css';
import {useState, usestate} from 'react';

import Form from './components/Form'

function App() {
  const [team, setTeam] = useState([])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
