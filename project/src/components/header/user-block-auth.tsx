import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function AuthHeader(): JSX.Element {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  const location = useLocation();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link onClick={logoutHandler} className="user-block__link" to={location.pathname}>Sign out</Link>
      </li>
    </ul>
  );
}

export default AuthHeader;
