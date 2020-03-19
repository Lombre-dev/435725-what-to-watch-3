import * as React from 'react';

type TProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function ShowMore(props: TProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onClick}>Show more</button>
    </div>
  );
}

export default React.memo(ShowMore);
