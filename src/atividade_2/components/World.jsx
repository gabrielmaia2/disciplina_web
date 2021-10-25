import React from 'react';
import PropTypes from 'prop-types';

export default function World({ children }) {
  return (
    <div className="world">
      <h1>Mundo</h1>
      {children}
    </div>
  );
}

World.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
