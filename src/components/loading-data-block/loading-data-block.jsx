import PropTypes from 'prop-types';
import React from 'react';
import {LoadingDataStatus} from '../../consts';

function LoadingDataBlock({status}) {
  return (
    <p>{status}</p>
  );
}

LoadingDataBlock.propTypes = {
  status: PropTypes.oneOf(Object.values(LoadingDataStatus)),
};

LoadingDataBlock.defaultProps = {
  statsus: ``,
};

export default LoadingDataBlock;
