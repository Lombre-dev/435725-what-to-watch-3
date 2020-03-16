import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppPages, LoadingDataStatus} from '../../consts';
import {Operations} from '../../redux/app/operations';
import {getAppStatus} from '../../redux/app/selectors';
import AddReviewPage from '../add-review-page';
import CatalogPage from '../catalog-page/catalog-page';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PlayerPage from '../player-page';
import PrivateRoute from '../private-route/private-route';
import ProtectedRoute from '../protected-route/protected-route';
import SignInPage from '../sign-in-page/sign-in-page';

type TAppProps = {
  status?: LoadingDataStatus;
  onMount?: Function;
};

class App extends React.PureComponent<TAppProps> {

  public componentDidMount() {

    const {onMount} = this.props;

    onMount();
  }

  public render() {

    const {status} = this.props;

    if (status !== LoadingDataStatus.READY) {
      return <LoadingDataBlock status={status} />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path={AppPages.MAIN} render={() => <CatalogPage />} />
          <Route exact path={AppPages.LOGIN} component={SignInPage} />
          <PrivateRoute exact path={AppPages.MY_LIST} render={() => <MyListPage />} />
          <PrivateRoute exact path={`${AppPages.MOVIES}/:id/review`} render={() => <AddReviewPage />} />
          <ProtectedRoute exact path={`${AppPages.MOVIES}/:id`} render={() => <MoviePage />} />
          <Route exact path={`${AppPages.PLAYER}/:id`} component={PlayerPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter >
    );
  }
}

function mapStateToProps(state: object) {
  return {
    status: getAppStatus(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onMount: () => {
      dispatch(Operations.init());
    },
  };
}

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
