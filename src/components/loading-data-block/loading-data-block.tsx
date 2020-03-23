import * as React from 'react';
import {LoadingDataStatus} from '../../types';

type TProps = {
  status: LoadingDataStatus;
};

function LoadingDataBlock(props: TProps) {
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
      {props.status}
    </div>
  );
}

export default React.memo(LoadingDataBlock);
