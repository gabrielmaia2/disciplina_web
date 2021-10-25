import React from 'react';
import VotacaoCidades from './hooks/VotacaoCidades';

export default function Atividade3() {
  const cidades = ['Fortaleza', 'Quixadá', 'Quixeramobim', 'Limoeiro'];

  return (
    <div>
      <VotacaoCidades cidades={cidades} />
    </div>
  );
}
