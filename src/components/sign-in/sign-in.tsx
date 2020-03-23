import * as React from 'react';
import {AuthorizationErrorCode} from '../../types';
import {AuthorizationErrorMessage} from '../../consts';

type TProps = {
  email?: string;
  password?: string;
  authError?: AuthorizationErrorCode;
  onSubmit: (email: string, password: string) => void;
};

class SignIn extends React.PureComponent<TProps> {

  private _emailRef: React.RefObject<HTMLInputElement>;
  private _passwordRef: React.RefObject<HTMLInputElement>;

  public constructor(props: TProps) {
    super(props);

    this._emailRef = React.createRef();
    this._passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(e: React.SyntheticEvent) {

    const {onSubmit} = this.props;
    const email = this._emailRef.current.value;
    const password = this._passwordRef.current.value;

    e.preventDefault();
    onSubmit(email, password);

    this._passwordRef.current.value = ``;
  }

  public render() {

    const {email, password, authError} = this.props;

    return (
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
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
              <label className="sign-in__label visually-hidden" htmlFor="user-email" />
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
