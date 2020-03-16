import * as React from 'react';

type TLoadingDataBlockProps = {
  status?: LoadingDataStatus,
};

function LoadingDataBlock(props: TLoadingDataBlockProps) {
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

export default LoadingDataBlock;
