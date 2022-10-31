import { Link } from 'react-router-dom';

type Props = {
  id: number;
  name: string;
  posterImageGreat: string;
}

function Card({id, name, posterImageGreat} : Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImageGreat} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
