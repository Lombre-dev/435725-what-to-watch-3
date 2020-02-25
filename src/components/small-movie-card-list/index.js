import withActiveItemList from '../../hocs/with-active-item-list';
import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../consts';
import SmallMovieCardList from './small-movie-card-list';

export default withActiveItemList(SmallMovieCardList, SMALL_MOVIE_CARD_PREVIEW_DELAY);
