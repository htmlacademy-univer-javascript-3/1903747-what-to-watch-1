export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  genre: string;
  released: number;
  rating: number;
  scoresCount: number;
  starring: string[];
  director: string;
  runTime: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export type Films = Film[];
