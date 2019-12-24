import React from 'react';
import CreateUsers from './components/createUsers';
import CreateDrill from './components/CreateDrill';
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateDrill></CreateDrill>
      <CreateUsers></CreateUsers>
    </div>
  );
}

export default App;
