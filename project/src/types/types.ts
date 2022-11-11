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
  reviews: Reviews;
  runTime: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export type Films = Film[];

export type Review = {
  text: string;
  score: number;
  userName: string;
  publishDate: Date;
}

export type Reviews = Review[];

