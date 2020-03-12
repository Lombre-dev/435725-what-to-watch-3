import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppPages, AuthorizationErrorCode, AuthorizationStatus} from '../../consts';
import {clearUserAuthError, setUserAuthRequired} from '../../redux/user/actions';
import {Operations as UserOperations} from '../../redux/user/operations';
import {getUserAuthError, getUserAuthStatus} from '../../redux/user/selectors';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';


class SignInPage extends React.PureComponent {

  componentDidMount() {

    const {init} = this.props;

    init();
  }

  render() {

    const {authStatus, authError, onSubmit} = this.props;

    if (authStatus === AuthorizationStatus.AUTH) {
      return <Redirect to={AppPages.MAIN} />;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <SignIn
          onSubmit={onSubmit}
          authError={authError}
        />
        <Footer />
      </div>
    );
  }
}

SignInPage.propTypes = {
  onSubmit: PropTypes.func,
  authStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  authError: PropTypes.oneOf(Object.values(AuthorizationErrorCode)),

  init: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authStatus: getUserAuthStatus(state),
    authError: getUserAuthError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(setUserAuthRequired(false));
    },
    onSubmit: ({email, password}) => {
      dispatch(clearUserAuthError());
      dispatch(UserOperations.login({email, password}));
    }
  };
}

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
