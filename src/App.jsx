import React from 'react';
import './App.css';
import Arena from './atividade_2/components/Arena';
import World from './atividade_2/components/World';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <World>
          <Arena />
          <Arena />
          <Arena />
        </World>
      </header>
    </div>
  );
}

export default App;
