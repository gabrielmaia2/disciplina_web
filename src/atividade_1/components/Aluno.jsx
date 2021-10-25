import React from 'react';
import PropTypes from 'prop-types';

import '../styles/aluno.css';

export default function Aluno({
  nome, idade, curso, cidade, email,
}) {
  return (
    <div className="aluno">
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos</p>
      <p>Curso: {curso}</p>
      <p>Cidade Origem: {cidade}</p>
      <p>Email: {email}</p>
    </div>
  );
}

Aluno.propTypes = {
  nome: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
  curso: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
