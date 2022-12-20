import React from 'react';
import { Link } from 'react-router-dom';
import PreviewPlayer from '../preview-player/preview-player';

type CardProps = {
  id: number;
  name: string;
  posterImageGreat: string;
  videoSrc: string;
}

function Card({ id, name, posterImageGreat, videoSrc}: CardProps): JSX.Element {
  const [isFocused, setIsFocused] = React.useState(false);
  let mouseTimer: string | number | NodeJS.Timeout | undefined;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => {
      mouseTimer = setTimeout(() => setIsFocused(true), 1000);
    }} onMouseLeave={() => {
      clearTimeout(mouseTimer);
      setIsFocused(false);
    }}
    >
      <div className="small-film-card__image">
        {isFocused ? <PreviewPlayer videoSrc={videoSrc} /> : <img src={posterImageGreat} alt={name } width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
