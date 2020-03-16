import * as React from 'react';
import {MOVIE_INFO_TABS} from '../../consts';

type TMovieInfoTabsProps = {
  currentTab: number;
  onTabClick: Function;
};

class MovieInfoTabs extends React.PureComponent<TMovieInfoTabsProps> {
  public constructor(props: TMovieInfoTabsProps) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  private _handleTabClick(e: React.SyntheticEvent) {

    const {onTabClick} = this.props;
    const index = parseInt((e.currentTarget as HTMLElement).dataset.index, 10);

    e.preventDefault();
    onTabClick({index});
  }

  public render() {

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

export default MovieInfoTabs;
