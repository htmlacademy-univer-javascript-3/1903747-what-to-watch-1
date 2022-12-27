import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { resetAmountToShow } from '../../store/main-data/main-data';
import { AuthData } from '../../types/user-data';

function AuthorizationPage(): JSX.Element {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(-1);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    const filter = /^\s*[\w\-/+_]+(\.[\w\-/+_]+)*@[\w\-/+_]+\.[\w\-/+_]+(\.[\w\-/+_]+)*\s*$/;
    if (String(e.target.value).search(filter) !== -1) {
      setIsLoginValid(true);
    } else {
      setIsLoginValid(false);
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const re1 = /[^0-9]+/g;
    const re2 = /[^a-zA-Z]+/g;
    setPasswordValue(password);
    if (password.length < 2 || !re1.test(password) || !re2.test(password)) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      login: emailValue,
      password: passwordValue
    });
  };
  const isButtonDisabled = !(isLoginValid && isPasswordValid);
  dispatch(resetAmountToShow());
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input value={emailValue} onChange={emailHandler} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input value={passwordValue} onChange={passwordHandler} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={isButtonDisabled}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default AuthorizationPage;
