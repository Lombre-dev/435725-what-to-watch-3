import * as React from 'react';
import {TMovie} from '../components/types';

type Props = {
  movies: TMovie[];
}

type State = {
  activeItemId: number;
}

function withActiveItem(Component, activationDelay: number) {

  class WithActiveItem extends React.PureComponent<Props, State> {

    private _timeoutId: number;

    public constructor(props: Props) {
      super(props);

      this._timeoutId = undefined;
      this.state = {
        activeItemId: -1,
      };

      this.handleItemHover = this.handleItemHover.bind(this);
      this.handleItemLeave = this.handleItemLeave.bind(this);
    }

    public componentWillUnmount() {
      window.clearTimeout(this._timeoutId);
    }

    private handleItemHover({id}) {
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
          onItemHover={this.handleItemHover}
          onItemLeave={this.handleItemLeave}
        />
      );
    }
  }

  return WithActiveItem;
}

export default withActiveItem;
