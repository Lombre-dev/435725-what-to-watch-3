import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppPages, AuthorizationErrorCode, AuthorizationStatus} from '../../consts';
import {setUserAuthRequired} from '../../redux/user/actions';
import {Operations as UserOperations} from '../../redux/user/operations';
import {getUserAuthError, getUserAuthStatus} from '../../redux/user/selectors';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';

type TProps = {
  authStatus?: AuthorizationStatus;
  authError?: AuthorizationErrorCode;
  onSubmit: (email: string, password: string) => void;
  onMount: () => void;
};

class PageSignIn extends React.PureComponent<TProps> {

  public componentDidMount() {

    const {onMount} = this.props;

    onMount();
  }

  public render() {

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

function mapStateToProps(state) {
  return {
    authStatus: getUserAuthStatus(state),
    authError: getUserAuthError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(setUserAuthRequired(false));
    },
    onSubmit: (email, password) => {
      dispatch(UserOperations.login(email, password));
    }
  };
}

export {PageSignIn};
export default connect(mapStateToProps, mapDispatchToProps)(PageSignIn);
