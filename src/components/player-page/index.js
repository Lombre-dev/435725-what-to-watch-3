import {connect} from 'react-redux';
import withVideoPlayer from '../../hocs/with-video-player';
import {getPlayerMovie} from '../../redux/player/selectors';
import PlayerPage from './player-page';

function mapStateToProps(state) {
  return {
    movie: getPlayerMovie(state),
  };
}

export default connect(mapStateToProps)(withVideoPlayer(PlayerPage));
