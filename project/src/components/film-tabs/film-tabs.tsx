
import { Film } from '../../types/types';
import { FilmTabsStatus } from '../../const';
import { useState } from 'react';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';

function RenderTab(tab: string, film: Film) {
	switch(tab) {
		case FilmTabsStatus.Overview:
			return <OverviewTab film={film}/>;
		case FilmTabsStatus.Details:
			return <DetailsTab film={film}/>;
		case FilmTabsStatus.Reviews:
			return <ReviewsTab reviews={film.reviews} />;
	}
}

function FilmTabs({ film }: { film: Film }): JSX.Element {
    const [currentTab, setCurrentTab] = useState(FilmTabsStatus.Overview);
	return (
		<div className="film-card__desc">
			<nav className="film-nav film-card__nav">
				<ul className="film-nav__list">
					<li className={currentTab === FilmTabsStatus.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item film-nav__item'}>
						<a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Overview)} className="film-nav__link">Overview</a>
					</li>
					<li className={currentTab === FilmTabsStatus.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
						<a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Details)} className="film-nav__link">Details</a>
					</li>	
					<li className={currentTab === FilmTabsStatus.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
						<a type="button" onClick={() => setCurrentTab(FilmTabsStatus.Reviews)} className="film-nav__link">Reviews</a>
					</li>
				</ul>
			</nav>
			{RenderTab(currentTab, film)}
		</div>
	);
}

export default FilmTabs;
