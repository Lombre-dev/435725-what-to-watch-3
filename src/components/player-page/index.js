import withVideoPlayer from '../../hocs/with-video-player';
import PlayerPage from './player-page';

// function mapStateToProps(state) {
//   return {
//     movie: getPlayerMovie(state),
//   };
// }

export default withVideoPlayer(PlayerPage);
// export default connect(mapStateToProps)(withVideoPlayer(PlayerPage));
