import { Films } from '../../types/types';
import Card from '../Card/Card';

type Props = {
  films: Films;
  amountToShow?: number;
}

function FilmList({ films, amountToShow }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films.slice(0, amountToShow).map((card, index) =>
          (<Card
            key={index}
            id={card.id}
            name={card.name}
            posterImageGreat={card.posterImageGreat}
            videoSrc={card.videoSrc}
          />)
        )
      }
    </div>
  );
}

export default FilmList;
