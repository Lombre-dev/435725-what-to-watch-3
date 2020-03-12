import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppPages} from '../../consts';
import {getUserAuthRequired} from '../../redux/user/selectors';

function ProtectedRoute({exact, path, render, authRequired}) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authRequired
            ? <Redirect to={AppPages.LOGIN} />
            : render()
        );
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  authRequired: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    authRequired: getUserAuthRequired(state),
  };
}

export {ProtectedRoute};
export default connect(mapStateToProps)(ProtectedRoute);
