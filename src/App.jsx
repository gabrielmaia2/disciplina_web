import React from 'react';
import './App.css';
import World from './atividade_2/components/World';
import Arena from './atividade_2/components/Arena';
import Enemy from './atividade_2/components/Enemy';
import Hero from './atividade_2/components/Hero';
import { heroUrl, enemyUrl } from './atividade_2/names';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <World>
          <Arena arena="Castelão 1">
            <Hero name="Gato de Botas" img={heroUrl} />
            <Enemy name="Ultra Duck" img={enemyUrl} />
          </Arena>
          <Arena arena="Castelão 2">
            <Hero name="Gato de Botas" img={heroUrl} />
            <Enemy name="Ultra Duck" img={enemyUrl} />
          </Arena>
          <Arena arena="Castelão 3">
            <Hero name="Gato de Botas" img={heroUrl} />
            <Enemy name="Ultra Duck" img={enemyUrl} />
          </Arena>
        </World>
      </header>
    </div>
  );
}

export default App;
