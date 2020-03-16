import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppPages} from '../../consts';
import {getUserAuthRequired} from '../../redux/user/selectors';

type TProtectedRouteProps = {
  exact: boolean;
  path: string;
  render: Function;
  authRequired?: boolean;
};

function ProtectedRoute(props: TProtectedRouteProps) {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => {
        return (
          props.authRequired
            ? <Redirect to={AppPages.LOGIN} />
            : props.render()
        );
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    authRequired: getUserAuthRequired(state),
  };
}

export {ProtectedRoute};
export default connect(mapStateToProps)(ProtectedRoute);
