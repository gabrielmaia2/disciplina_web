import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function VotacaoCidades({ cidades }) {
  // preferi criar uma props para colocar as cidades (deixando mais reusável)

  const [votos, mudarVotos] = useState(cidades.map(() => 0));
  const [maior, setMaior] = useState(votos[0]);
  const [menor, setMenor] = useState(votos[0]);

  useEffect(() => {
    let maiorNovo = votos[0];
    let menorNovo = votos[0];

    votos.forEach((voto) => {
      if (voto > maiorNovo) maiorNovo = voto;
      else if (voto < menorNovo) menorNovo = voto;
    });

    setMaior(maiorNovo);
    setMenor(menorNovo);
  }, [votos, cidades]);

  function votar(numCidade) {
    mudarVotos(votos.map((numVotos, i) => {
      if (i === numCidade) return numVotos + 1;
      return numVotos;
    }));
  }

  function calculaMaiores() {
    const maiores = [];
    votos.forEach((voto, i) => {
      if (voto === maior) maiores.push(cidades[i]);
    });
    return maiores;
  }

  function calculaMenores() {
    const menores = [];
    votos.forEach((voto, i) => {
      if (voto === menor) menores.push(cidades[i]);
    });
    return menores;
  }

  const maiores = calculaMaiores();
  const menores = calculaMenores();

  const maiorPlural = maiores.length > 1 ? 's' : '';
  let maiorString = `Mais votada${maiorPlural}`;
  const maiorVotosPlural = maior !== 1 ? 's' : '';
  maiorString += ` (com ${maior} voto${maiorVotosPlural}) :`;

  const menorPlural = menores.length > 1 ? 's' : '';
  let menorString = `Menos votada${menorPlural}`;
  const menorVotosPlural = menor !== 1 ? 's' : '';
  menorString += ` (com ${menor} voto${menorVotosPlural}) :`;

  const cidadesRender = cidades.map((cidade, i) => <h3>{`${cidade}: ${votos[i]}`}</h3>);
  const votarButtons = cidades.map((cidade, i) => (
    <button className="votar" type="button" onClick={() => votar(i)}>{`Votar em ${cidade}`}</button>
  ));

  let somaVotos = 0;
  votos.forEach((voto) => {
    somaVotos += voto;
  });

  return (
    <div className="votar-cidades">
      <h1>Votação de cidades:</h1>
      <div className="content center-margin">
        <div className="cidades">
          <h2 className="center-text">Votos:</h2>
          {cidadesRender}
        </div>
        <div className="mais-votadas">
          <h3>{maiorString}</h3>
          {maiores.join(', ')}
          <h3>{menorString}</h3>
          {menores.join(', ')}
          <h3>{`Total de votos: ${somaVotos}`}</h3>
        </div>
      </div>
      <div className="button-container center-margin">
        {votarButtons}
      </div>
    </div>
  );
}

VotacaoCidades.propTypes = {
  cidades: PropTypes.arrayOf(PropTypes.string).isRequired,
};
