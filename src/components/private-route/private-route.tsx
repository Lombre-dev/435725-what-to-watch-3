import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppPages, AuthorizationStatus} from '../../consts';
import {getUserAuthStatus} from '../../redux/user/selectors';

type TPrivateRouteProps = {
  exact: boolean;
  path: string;
  render: Function;
  authStatus?: AuthorizationStatus;
};

function PrivateRoute(props: TPrivateRouteProps) {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => {
        return (
          props.authStatus === AuthorizationStatus.AUTH
            ? props.render()
            : <Redirect to={AppPages.LOGIN} />
        );
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    authStatus: getUserAuthStatus(state),
  };
}

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
