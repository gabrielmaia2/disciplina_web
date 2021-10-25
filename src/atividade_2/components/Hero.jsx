import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Hero({ name, img }) {
  return (
    <div className="entity">
      <h1>Herói</h1>
      <h4>{`Nome: ${name}`}</h4>
      <img src={img} alt="Hero" />
    </div>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
