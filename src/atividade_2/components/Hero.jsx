import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Hero({ name, img, arena }) {
  return (
    <div className="entity">
      <h2>Herói</h2>
      <h4>{`Nome: ${name}`}</h4>
      <img src={img} alt="Hero" />
      <h4>{`Arena: ${arena}`}</h4>
    </div>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  arena: PropTypes.string.isRequired,
};
