import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Enemy({ name, img }) {
  return (
    <div className="entity">
      <h2>Inimigo</h2>
      <h4>{`Nome: ${name}`}</h4>
      <img src={img} alt="Enemy" />
    </div>
  );
}

Enemy.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
