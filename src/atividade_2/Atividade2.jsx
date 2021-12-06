import React from 'react';
import World from './components/World';
import Arena from './components/Arena';
import Enemy from './components/Enemy';
import Hero from './components/Hero';
import { heroUrl, enemyUrl } from './names';

import '../App.css';

function Atividade2() {
  return (
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
  );
}

export default Atividade2;
