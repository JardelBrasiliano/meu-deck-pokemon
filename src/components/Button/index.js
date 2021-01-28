import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function Button({ children }) {
  return (
    <div className="Header-content-right-register">
      <p>{children}</p>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
