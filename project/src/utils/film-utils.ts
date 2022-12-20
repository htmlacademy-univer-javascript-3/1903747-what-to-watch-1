import { Films } from '../types/types';

const ratingConverter = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

export default ratingConverter;

export function filterFilmByGenre(films: Films, genre: string) {
  if (genre === 'All genres') {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

export function unID() {
  const id = `id${Math.random().toString(16).slice(2)}`;
  return id;
}
