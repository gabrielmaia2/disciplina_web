import React from 'react';
import Enemy from './Enemy';
import Hero from './Hero';

import '../style.css';

export default function Arena() {
  return (
    <div className="arena">
      <div className="fighters">
        <Hero name="Gato de Botas" />
        <Enemy name="Ultra Duck" />
      </div>
    </div>
  );
}
