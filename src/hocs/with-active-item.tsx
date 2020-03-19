import * as React from 'react';
import {TMovie} from '../components/types';

type TProps = {
  movies: TMovie[];
}

type TState = {
  activeItemId: number;
}

function withActiveItem(Component, activationDelay: number) {

  class WithActiveItem extends React.PureComponent<TProps, TState> {

    private _timeoutId: number;

    public constructor(props: TProps) {
      super(props);

      this._timeoutId = null;
      this.state = {
        activeItemId: null,
      };

      this.handleItemHover = this.handleItemHover.bind(this);
      this.handleItemLeave = this.handleItemLeave.bind(this);
    }

    public componentWillUnmount() {
      window.clearTimeout(this._timeoutId);
    }

    private handleItemHover(id: number) {
      window.clearTimeout(this._timeoutId);
      this._timeoutId = window.setTimeout(() => {
        this.setState({
          activeItemId: id,
        });
      }, activationDelay);
    }

    private handleItemLeave() {
      window.clearTimeout(this._timeoutId);
      this.setState({
        activeItemId: null,
      });
    }

    public render() {

      const {activeItemId} = this.state;
      const {movies} = this.props;

      return (
        <Component
          movies={movies}
          activeItemId={activeItemId}
          onItemHover={this.handleItemHover}
          onItemLeave={this.handleItemLeave}
        />
      );
    }
  }

  return WithActiveItem;
}

export default withActiveItem;
