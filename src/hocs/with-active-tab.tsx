import * as React from 'react';
import {TMovie} from '../components/types';

type TProps = {
  movie: TMovie;
}

type TState = {
  activeTab: number;
}

function withActiveTab(Component) {

  class WithActiveTab extends React.PureComponent<TProps, TState> {
    public constructor(props: TProps) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    private handleTabClick(index: number) {
      this.setState({
        activeTab: index,
      });
    }

    public render() {

      const {activeTab} = this.state;
      const {movie} = this.props;

      return (
        <Component
          movie={movie}
          activeTab={activeTab}
          onTabClick={this.handleTabClick}
        />
      );
    }
  }

  return WithActiveTab;
}

export default withActiveTab;
