import * as React from 'react';
import {LoadingDataStatus} from '../../consts';

type Props = {
  status?: LoadingDataStatus;
};

function LoadingDataBlock(props: Props) {
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
