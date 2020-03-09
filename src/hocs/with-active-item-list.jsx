import PropTypes from 'prop-types';
import React from 'react';
import {Movie} from '../components/types';

export default function withActiveItemList(Component, setActiveTimeDelay) {

  class WithActiveItemList extends React.PureComponent {
    constructor(props) {
      super(props);

      this._timeoutId = undefined;
      this.state = {
        activeItemId: -1,
      };

      this._handleItemHover = this._handleItemHover.bind(this);
      this._handleItemLeave = this._handleItemLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timeoutId);
    }

    _handleItemHover({id}) {
      clearTimeout(this._timeoutId);
      this._timeoutId = setTimeout(() => {
        this.setState({
          activeItemId: id,
        });
      }, setActiveTimeDelay);
    }

    _handleItemLeave() {
      clearTimeout(this._timeoutId);
      this.setState({
        activeItemId: -1,
      });
    }

    render() {

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

  WithActiveItemList.propTypes = {
    movies: PropTypes.arrayOf(Movie).isRequired,
  };

  return WithActiveItemList;
}
