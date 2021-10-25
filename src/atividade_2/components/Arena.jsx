import React, { Children } from 'react';
import PropTypes from 'prop-types';

import '../style.css';

export default function Arena({ arena, children }) {
  return (
    <div className="arena">
      <h1>{arena}</h1>
      <div className="fighters">
        {
          Children.map(children, (e) => React.cloneElement(e, { arena }))
        }
      </div>
    </div>
  );
}

Arena.propTypes = {
  arena: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
