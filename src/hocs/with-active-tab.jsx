import React from 'react';
import {Movie} from '../components/types';

export default function withActiveTab(Component) {

  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick({index}) {
      this.setState({
        activeTab: index,
      });
    }

    render() {

      const {activeTab} = this.state;
      const {movie} = this.props;

      return (
        <Component
          movie={movie}
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    movie: Movie.isRequired,
  };

  return WithActiveTab;
}
