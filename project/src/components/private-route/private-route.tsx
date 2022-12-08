import {Navigate} from 'react-router-dom';
import {AppRouteProps, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRouteProps.SignIn} />
  );
}

export default PrivateRoute;
