import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppPages, AuthorizationStatus} from '../../consts';
import {getUserAuthStatus} from '../../redux/user/selectors';

function PrivateRoute({exact, path, render, authStatus}) {

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppPages.LOGIN} />
        );
      }}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
};

function mapStateToProps(state) {
  return {
    authStatus: getUserAuthStatus(state),
  };
}

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
