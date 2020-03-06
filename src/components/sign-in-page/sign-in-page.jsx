import React from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';

function SignInPage({}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignIn
        // eslint-disable-next-line no-console
        onSubmit={(form) => console.log(form)}
      />
      <Footer />
    </div>
  );
}

export default SignInPage;
