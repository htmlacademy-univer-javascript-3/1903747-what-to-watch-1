import { CardMock } from '../../types/types';

function Card({cardTitle, imgSrc} : CardMock): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgSrc} alt={cardTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{cardTitle}</a>
      </h3>
    </article>
  );
}

export default Card;
