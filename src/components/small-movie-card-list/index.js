import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../../consts';
import withActiveItemList from '../../hocs/with-active-item-list';
import SmallMovieCardList from './small-movie-card-list';

export default withActiveItemList(SmallMovieCardList, SMALL_MOVIE_CARD_PREVIEW_DELAY);
