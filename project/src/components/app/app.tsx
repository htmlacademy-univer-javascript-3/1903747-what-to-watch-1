import MainPage from '../../pages/main-page/main-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import AuthorizationPage from '../../pages/authorization-page/authorization-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import Page404 from '../../pages/404Page/404Page';
import PlayerPage from '../../pages/player-page/player-page';
import { AppRouteProps, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CardMock } from '../../types/types';

type Props = {
  cardMocksArray : CardMock[];
}

function App({cardMocksArray}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRouteProps.Main} element={<MainPage cardMocksArray={cardMocksArray}/>} />
        <Route path={AppRouteProps.SignIn} element={<AuthorizationPage />} />
        <Route path={AppRouteProps.Player} element={<PlayerPage />} />
        <Route path={AppRouteProps.AddReview} element={<AddReviewPage />} />
        <Route
          path={AppRouteProps.MyList}
          element={
            <PrivateRoute authStatus={AuthorizationStatus.NoAuth}><MyListPage /></PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
