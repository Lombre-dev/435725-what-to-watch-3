import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppPages} from '../../consts';
import AddReviewPage from '../add-review-page';
import CatalogPage from '../catalog-page/catalog-page';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page';
import {PrivateRoute} from '../private-route/private-route';
import SignInPage from '../sign-in-page/sign-in-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppPages.MAIN} component={CatalogPage} />
        <Route exact path={AppPages.LOGIN} component={SignInPage} />
        <PrivateRoute exact path={AppPages.MY_LIST} render={() => <MyListPage />} />
        <PrivateRoute exact path={`${AppPages.MOVIES}/:id/review`} render={() => <AddReviewPage />} />
        <Route exact path={`${AppPages.MOVIES}/:id`} component={MoviePage} />
        <Route exact path={`${AppPages.PLAYER}/:id`} component={PlayerPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
