
import { Film } from '../../types/types';
import { FilmTabsStatus } from '../../const';
import { useState } from 'react';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';
import { useAppSelector } from '../../hooks';
import { Reviews } from '../../types/review';

function RenderTab(tab: string, film: Film, reviews: Reviews) {
  switch (tab) {
    case FilmTabsStatus.Overview:
      return <OverviewTab film={film} />;
    case FilmTabsStatus.Details:
      return <DetailsTab film={film} />;
    case FilmTabsStatus.Reviews:
      return <ReviewsTab reviews={reviews} />;
  }
}

type FilmTabsProps = {
  film: Film;
}

function FilmTabs({film} : FilmTabsProps): JSX.Element {
  const reviews = useAppSelector((state) => state.currentFilm.reviews);
  const [currentTab, setCurrentTab] = useState(FilmTabsStatus.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li style={{ cursor: 'pointer' }} className={currentTab === FilmTabsStatus.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item film-nav__item'}>
            <a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Overview)} className="film-nav__link">Overview</a>
          </li>
          <li style={{ cursor: 'pointer' }} className={currentTab === FilmTabsStatus.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Details)} className="film-nav__link">Details</a>
          </li>
          <li style={{ cursor: 'pointer' }} className={currentTab === FilmTabsStatus.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Reviews)} className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {RenderTab(currentTab, film, reviews)}
    </div>
  );
}

export default FilmTabs;
