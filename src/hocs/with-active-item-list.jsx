import React from 'react';
import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../components/consts';

export default function withActiveItemList(Component) {

  class WithActiveItemList extends React.PureComponent {
    constructor(props) {
      super(props);

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
      }, SMALL_MOVIE_CARD_PREVIEW_DELAY);
    }

    _handleItemLeave() {
      clearTimeout(this.timeoutId);
      this.setState({
        activeItemId: -1,
      });
    }

    render() {

      const {activeItemId} = this.state;
      // const {onItemClick} = this.props;

      return (
        <Component {...this.props}
          activeItemId={activeItemId}
          onItemHover={this._handleItemHover}
          onItemLeave={this._handleItemLeave}
        // onItemClick={onItemClick}
        />
      );
    }
  }

  WithActiveItemList.propTypes = {
    // думаю нет необходимости в описании этого пропса
    // onItemClick: PropTypes.func.isRequired,
  };

  return WithActiveItemList;
}
