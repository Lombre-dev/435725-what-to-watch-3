import PropTypes from 'prop-types';
import React from 'react';

function Logo({isLight}) {
  return (
    <div className="logo">
      <a className={`logo__link${isLight ? ` logo__link--light` : ``}`} href="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  isLight: PropTypes.bool,
};

export default Logo;
