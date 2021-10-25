import React from 'react';
import './App.css';
import Arena from './atividade_2/components/Arena';
import Enemy from './atividade_2/components/Enemy';
import Hero from './atividade_2/components/Hero';
import { heroUrl, enemyUrl } from './atividade_2/names';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Arena arena="Tokyo Dome - Underground Area">
          <Hero name="Gato de Botas" img={heroUrl} />
          <Enemy name="Ultra Duck" img={enemyUrl} />
        </Arena>
      </header>
    </div>
  );
}

export default App;
