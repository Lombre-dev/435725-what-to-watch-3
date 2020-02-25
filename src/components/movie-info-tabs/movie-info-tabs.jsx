import PropTypes from 'prop-types';
import React from 'react';
import {MOVIE_INFO_TABS} from '../consts';

class MovieInfoTabs extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(e) {

    const {onTabClick} = this.props;
    const index = parseInt(e.currentTarget.dataset.index, 10);

    e.preventDefault();
    onTabClick({index});
  }

  render() {

    const {currentTab} = this.props;

    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            MOVIE_INFO_TABS.map((tab, index) => {
              return (
                <li key={tab}
                  className={`movie-nav__item ${currentTab === index ? `movie-nav__item--active` : ``}`}
                >
                  <a
                    data-index={index}
                    href="#"
                    className="movie-nav__link"
                    onClick={this._handleTabClick}
                  >{tab}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

MovieInfoTabs.propTypes = {
  currentTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MovieInfoTabs;
