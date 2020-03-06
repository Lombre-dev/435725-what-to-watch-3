import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppPages} from '../consts';

function Logo({isLight}) {
  return (
    <div className="logo">
      <Link className={`logo__link${isLight ? ` logo__link--light` : ``}`} to={AppPages.MAIN}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isLight: PropTypes.bool,
};

export default Logo;
