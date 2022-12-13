import {Navigate} from 'react-router-dom';
import {AppRouteProps, AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading-components/loading-screen';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;
  if (authStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRouteProps.SignIn} />
  );
}

export default PrivateRoute;
