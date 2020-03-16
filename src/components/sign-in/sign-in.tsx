import * as React from 'react';
import {AuthorizationErrorCode, AuthorizationErrorMessage} from '../../consts';

type TSignInProps = {
  email?: string;
  password?: string;
  authError?: AuthorizationErrorCode;
  onSubmit: Function;
};

class SignIn extends React.PureComponent<TSignInProps> {

  private _emailRef: React.RefObject<HTMLInputElement>;
  private _passwordRef: React.RefObject<HTMLInputElement>;

  public constructor(props: TSignInProps) {
    super(props);

    this._emailRef = React.createRef();
    this._passwordRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  private _handleSubmit(e: React.SyntheticEvent) {

    const {onSubmit} = this.props;
    const email = this._emailRef.current.value;
    const password = this._passwordRef.current.value;

    e.preventDefault();
    onSubmit({email, password});

    this._passwordRef.current.value = ``;
  }

  public render() {

    const {email, password, authError} = this.props;

    return (
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
          {
            authError && <div className="sign-in__message">
              <p>{AuthorizationErrorMessage[authError]}</p>
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
                ref={this._emailRef}
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
                ref={this._passwordRef}
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

  public static defaultProps = {
    email: `test@test.com`,
    password: `1`,
  }
}

export default SignIn;
