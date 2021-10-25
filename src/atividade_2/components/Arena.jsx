import React from 'react';
import Enemy from './Enemy';
import Hero from './Hero';
import { heroUrl, enemyUrl } from '../names';

import '../style.css';

export default function Arena() {
  return (
    <div className="arena">
      <h1>Arena</h1>
      <div className="fighters">
        <Hero name="Gato de Botas" img={heroUrl} />
        <Enemy name="Ultra Duck" img={enemyUrl} />
      </div>
    </div>
  );
}
