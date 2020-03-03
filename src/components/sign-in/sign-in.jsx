import PropTypes from 'prop-types';
import React from 'react';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {

    const {onSubmit} = this.props;

    // eslint-disable-next-line no-console
    console.log(e.currentTarget);

    e.preventDefault();
    onSubmit(e);
  }

  render() {

    const {email, password, authMessage} = this.props;

    return (
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
          {
            authMessage && <div className="sign-in__message">
              <p>{authMessage}</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                defaultValue={email}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email"></label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                defaultValue={password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">{password}</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  authMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
