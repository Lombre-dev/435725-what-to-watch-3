import * as React from 'react';
import {connect} from 'react-redux';
import {setCatalogGenre} from '../../redux/catalog/actions';
import {getGenreLabels} from '../../utils/movie-utils';

type TProps = {
  genre: string;
  onSelect: (genre: string) => void;
};

class GenreFilterItem extends React.PureComponent<TProps> {

  public constructor(props: TProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick(e: React.SyntheticEvent) {

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
        onClick={this.handleClick}
      >{genreLabels[genre] || genre}</a>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (genre: string) => {
      dispatch(setCatalogGenre(genre));
    },
  };
}

export {GenreFilterItem};
export default connect(null, mapDispatchToProps)(GenreFilterItem);
