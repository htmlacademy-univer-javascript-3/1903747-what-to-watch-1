import { Link } from 'react-router-dom';
import { AppRouteProps, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import AuthHeader from './user-block-auth';

function Header(): JSX.Element {

  const authStatus = useAppSelector((store) => store.authorizationStatus);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={'/'} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        {authStatus === AuthorizationStatus.Auth ? <AuthHeader /> : <Link className="user-block__link" to={AppRouteProps.SignIn}>Sign in</Link>}
      </ul>
    </header>
  );
}

export default Header;
