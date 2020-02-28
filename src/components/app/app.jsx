import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CatalogPage from '../catalog-page/catalog-page';
import MoviePage from '../movie-page/movie-page';
import {Movie} from '../types';

class App extends React.PureComponent {

  _renderState() {

    const {currentMovie} = this.props;

    if (currentMovie) {
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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentMovie: Movie,
};

function mapStateToProps(state) {
  return {
    currentMovie: state.currentMovie,
  };
}

export {App};
export default connect(mapStateToProps)(App);
