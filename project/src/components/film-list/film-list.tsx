import { Films } from '../../types/types';
import { unID } from '../../utils/film-utils';
import Card from '../card/card';

type FilmListProps = {
  films: Films | null;
  notFoundMessage: string;
  amountToShow?: number;
}

function FilmList({ films, amountToShow, notFoundMessage }: FilmListProps): JSX.Element {
  if (!films) {
    return <h3>Sorry, but we couldn&apos;t download the movies</h3>;
  }

  if (films.length === 0) {
    return (
      <h3>{notFoundMessage}</h3>
    );
  }
  return (
    <div className="catalog__films-list">
      {
        films.slice(0, amountToShow).map((card) =>
          (
            <Card
              id={card.id}
              key={unID()}
              name={card.name}
              posterImageGreat={card.previewImage}
              videoSrc={card.previewVideoLink}
            />
          )
        )
      }
    </div>
  );
}

export default FilmList;
