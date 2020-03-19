import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppPages} from '../../consts';

type Props = {
  isLight?: boolean;
};

function Logo(props: Props) {
  return (
    <div className="logo">
      <Link className={`logo__link${props.isLight ? ` logo__link--light` : ``}`} to={AppPages.MAIN}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default React.memo(Logo);
