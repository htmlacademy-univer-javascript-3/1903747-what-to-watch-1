import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRouteProps, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchPostFavoriteAction } from '../../../store/api-actions';
import { getFavoriteFilms, getFavoriteLoading } from '../../../store/film-process/film-process-selectors';
import { PostFavoriteStatus } from '../../../types/state';

type MyListButtonProps = {
  authStatus: AuthorizationStatus;
  id: number;
}

function MyListButton({ authStatus, id }: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isLoading = useAppSelector(getFavoriteLoading);
  const [isFilmInMyList, setFilmInMyList] = useState(false);

  useEffect(() => {
    setFilmInMyList(!!favoriteFilms?.find((film) => film.id === id));
  }, [favoriteFilms?.length]);

  const myListButtonHandler = () => {
    let fetchData: PostFavoriteStatus;
    if (isFilmInMyList) {
      fetchData = { id: id, isFavorite: false };
      dispatch(fetchPostFavoriteAction(fetchData));
      setFilmInMyList(false);
    } else {
      fetchData = { id: id, isFavorite: true };
      dispatch(fetchPostFavoriteAction(fetchData));
      setFilmInMyList(true);
    }
  };

  if (authStatus === AuthorizationStatus.NoAuth) {
    return (
      <Link to={AppRouteProps.SignIn} type='button' className="btn btn--list film-card__button" >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref='#add'></use>
        </svg>
        <span>My list</span>
      </Link>
    );
  }

  const getSvg = (): string => {
    if (isLoading) {
      return '';
    }
    return (isFilmInMyList && !isLoading ? '#in-list' : '#add');
  };

  return (
    <button className="btn btn--list film-card__button" onClick={myListButtonHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={getSvg()}></use>
      </svg>
      <span>My list</span>
      {<span className="film-card__count">{isLoading ? '...' : favoriteFilms?.length ?? ''}</span>}
    </button>
  );
}

export default MyListButton;
