import React from 'react';
import VotacaoCidades from './hooks/VotacaoCidades';

import '../App.css';

export default function Atividade3() {
  const cidades = ['Fortaleza', 'Quixadá', 'Quixeramobim', 'Limoeiro'];

  return (
    <div>
      <VotacaoCidades cidades={cidades} />
    </div>
  );
}
