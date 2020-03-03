import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getCurrentMovie} from '../../redux/movie-details/selectors';
import {getPlayerMovie} from '../../redux/player/selectors';
import CatalogPage from '../catalog-page/catalog-page';
import MoviePage from '../movie-page/movie-page';
import PlayerPage from '../player-page';
import {SignInPage} from '../sign-in-page/sign-in-page';
import {Movie} from '../types';

class App extends React.PureComponent {

  _renderState() {

    const {playerMovie, currentMovie} = this.props;

    if (playerMovie) {
      return (
        <PlayerPage />
      );
    } else if (currentMovie) {
      return (
        <MoviePage />
      );
    }

    return (
      <CatalogPage />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">{
            this._renderState()
          }</Route>
          <Route exact path="/dev-movie-detail-info">
            {/* <MovieInfo
              movie={movies[0]}
            /> */}
          </Route>
          <Route exact path="/login">
            <SignInPage />
          </Route>
          <Route exact path="/film">
            <PlayerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentMovie: Movie,
  playerMovie: Movie,
};

function mapStateToProps(state) {
  return {
    currentMovie: getCurrentMovie(state),
    playerMovie: getPlayerMovie(state),
  };
}

export {App};
export default connect(mapStateToProps)(App);
