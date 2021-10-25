import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Enemy({ name }) {
  return (
    <div className="entity">
      <h1>Inimigo</h1>
      <h4>{`Nome: ${name}`}</h4>
      <img src="https://i.imgur.com/bUMJncn.png" alt="Enemy" />
    </div>
  );
}

Enemy.propTypes = {
  name: PropTypes.string.isRequired,
};
