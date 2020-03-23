import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppPages, LoadingDataStatus} from '../../types';
import {Operations} from '../../redux/app/operations';
import {getAppStatus} from '../../redux/app/selectors';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import PageAddReview from '../page-add-review/page-add-review';
import PageCatalog from '../page-catalog/page-catalog';
import MoviePage from '../page-movie/page-movie';
import PageMyList from '../page-my-list/page-my-list';
import PageNotFound from '../page-not-found/page-not-found';
import PagePlayer from '../page-player/page-player';
import PageSignIn from '../page-sign-in/page-sign-in';
import PrivateRoute from '../private-route/private-route';
import ProtectedRoute from '../protected-route/protected-route';

type TProps = {
  status: LoadingDataStatus;
  onMount: () => void;
};

class App extends React.PureComponent<TProps> {

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
          <ProtectedRoute exact path={AppPages.MAIN} render={() => <PageCatalog />} />
          <Route exact path={AppPages.LOGIN} component={PageSignIn} />
          <PrivateRoute exact path={AppPages.MY_LIST} render={() => <PageMyList />} />
          <PrivateRoute exact path={`${AppPages.MOVIES}/:id/review`} render={() => <PageAddReview />} />
          <ProtectedRoute exact path={`${AppPages.MOVIES}/:id`} render={() => <MoviePage />} />
          <Route exact path={`${AppPages.PLAYER}/:id`} component={PagePlayer} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter >
    );
  }
}

function mapStateToProps(state) {
  return {
    status: getAppStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(Operations.init());
    },
  };
}

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
