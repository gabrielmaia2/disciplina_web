import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Hero({ name }) {
  return (
    <div className="entity">
      <h1>Herói</h1>
      <h4>{`Nome: ${name}`}</h4>
      <img src="https://i.imgur.com/bEe0JIT.png" alt="Hero" />
    </div>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
};
