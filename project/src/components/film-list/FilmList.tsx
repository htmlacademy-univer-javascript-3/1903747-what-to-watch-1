import { Films } from '../../types/types';
import Card from '../Card/Card';

type Props = {
  films: Films;
  amountToShow?: number;
}

function FilmList({ films, amountToShow }: Props): JSX.Element {
  if (films.length === 0) {
    return (
      <h2>We couldn't find any movies similar to this one :&#40;</h2>
    );
  }
  return (
    <div className="catalog__films-list">
      {
        films.slice(0, amountToShow).map((card, index) =>
          (<Card
            key={index}
            id={card.id}
            name={card.name}
            posterImageGreat={card.previewImage}
            videoSrc={card.previewVideoLink}
          />)
        )
      }
    </div>
  );
}

export default FilmList;
