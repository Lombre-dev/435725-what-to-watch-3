import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {getUserAuthRequired} from '../../redux/user/selectors';
import {AppPages} from '../../types';

type TProps = {
  exact: boolean;
  path: string;
  authRequired?: boolean;
  render: () => React.ReactNode;
};

function ProtectedRoute(props: TProps) {
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
