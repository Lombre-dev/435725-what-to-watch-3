import PropTypes from 'prop-types';
import React from 'react';
import {LoadingDataStatus} from '../../consts';

function LoadingDataBlock({status}) {
  return (
    <div style={
      {
        fontSize: `30px`,
        fontWeight: `bold`,
        color: `#dfcf77`,
        width: `100%`,
        height: `100%`,
      }
    }>
      {status}
    </div>
  );
}

LoadingDataBlock.propTypes = {
  status: PropTypes.oneOf(Object.values(LoadingDataStatus)),
};

LoadingDataBlock.defaultProps = {
  statsus: ``,
};

export default LoadingDataBlock;
