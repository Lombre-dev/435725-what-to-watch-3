import * as React from 'react';
import {connect} from 'react-redux';
import {setCatalogGenre} from '../../redux/catalog/actions';
import {getGenreLabels} from '../../utils/movie-utils';

type TGenreFilterProps = {
  genre: string;
  onSelect: Function;
};

class GenreFilter extends React.PureComponent<TGenreFilterProps> {

  public constructor(props: TGenreFilterProps) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  private _handleClick(e: React.SyntheticEvent) {

    const {genre, onSelect} = this.props;

    e.preventDefault();
    onSelect(genre);
  }

  public render() {

    const {genre} = this.props;
    const genreLabels = getGenreLabels();

    return (
      <a
        href="#"
        className="catalog__genres-link"
        onClick={this._handleClick}
      >{genreLabels[genre] || genre}</a>
    );
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onSelect: (genre: string) => {
      dispatch(setCatalogGenre(genre));
    },
  };
}

export {GenreFilter};
export default connect(null, mapDispatchToProps)(GenreFilter);
