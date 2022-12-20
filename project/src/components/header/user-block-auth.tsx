import { Link, useLocation } from 'react-router-dom';
import { AppRouteProps } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAvatar } from '../../store/user-process/user-process-selectors';

function AuthHeader(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector(getAvatar);
  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  const location = useLocation();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRouteProps.MyList}><img src={avatarUrl} alt="User avatar" width="63" height="63" /></Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link onClick={logoutHandler} className="user-block__link" to={location.pathname}>Sign out</Link>
      </li>
    </ul>
  );
}

export default AuthHeader;
