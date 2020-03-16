import * as React from 'react';
import {TMovie} from '../components/types';

type TWithActiveItemListState = {
  activeItemId: number;
}

type TWithActiveItemListProps = {
  movies: TMovie[];
}

function withActiveItemList(Component, activationDelay: number) {

  class WithActiveItemList extends React.PureComponent<TWithActiveItemListProps, TWithActiveItemListState> {

    private _timeoutId: number;

    public constructor(props: TWithActiveItemListProps) {
      super(props);

      this._timeoutId = undefined;
      this.state = {
        activeItemId: -1,
      };

      this._handleItemHover = this._handleItemHover.bind(this);
      this._handleItemLeave = this._handleItemLeave.bind(this);
    }

    public componentWillUnmount() {
      window.clearTimeout(this._timeoutId);
    }

    private _handleItemHover({id}) {
      window.clearTimeout(this._timeoutId);
      this._timeoutId = window.setTimeout(() => {
        this.setState({
          activeItemId: id,
        });
      }, activationDelay);
    }

    private _handleItemLeave() {
      window.clearTimeout(this._timeoutId);
      this.setState({
        activeItemId: -1,
      });
    }

    public render() {

      const {activeItemId} = this.state;
      const {movies} = this.props;

      return (
        <Component
          movies={movies}
          activeItemId={activeItemId}
          onItemHover={this._handleItemHover}
          onItemLeave={this._handleItemLeave}
        />
      );
    }
  }

  return WithActiveItemList;
}

export default withActiveItemList;
