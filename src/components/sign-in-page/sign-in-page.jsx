import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {AppPages, AuthorizationStatus} from '../../consts';
import {Operations as UserOperations} from '../../redux/user/operations';
import {getUserAuthorizationStatus} from '../../redux/user/selectors';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';


function SignInPage({status, onSubmit}) {

  if (status === AuthorizationStatus.AUTH) {
    document.location.href = AppPages.MAIN;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <SignIn
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
}

SignInPage.propTypes = {
  onSubmit: PropTypes.func,
  status: PropTypes.oneOf(Object.values(AuthorizationStatus)),
};

function mapStateToProps(state) {
  return {
    status: getUserAuthorizationStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({email, password}) => {
      dispatch(UserOperations.login({email, password}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
