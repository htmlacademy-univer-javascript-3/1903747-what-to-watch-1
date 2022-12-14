import MainPage from '../../pages/main-page/main-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import AuthorizationPage from '../../pages/authorization-page/authorization-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import Page404 from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import { AppRouteProps } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRouteProps.Main} element={<MainPage />} />
        <Route path={AppRouteProps.SignIn} element={<AuthorizationPage />} />
        <Route path={AppRouteProps.Player} element={<PlayerPage />} />
        <Route path={AppRouteProps.Film} element={<MoviePage />} />
        <Route
          path={AppRouteProps.AddReview}
          element={
            <PrivateRoute authStatus={authStatus}><AddReviewPage /></PrivateRoute>
          }
        />
        <Route
          path={AppRouteProps.MyList}
          element={
            <PrivateRoute authStatus={authStatus}><MyListPage /></PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
