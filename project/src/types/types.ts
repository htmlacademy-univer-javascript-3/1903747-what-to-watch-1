export type Film = {
  id: number;
  name: string;
  posterImageGreat: string;
  posterImageSmall: string;
  genre: string;
  releaseDate: Date;
  score: number;
  numOfScores: number;
  actors: string[];
  director: string;
  reviews: Reviews;
  overview: string;
  details: string;
  videoSrc: string;
}

export type Films = Film[];

export type Review = {
  text: string;
  score: number;
  userName: string;
  publishDate: Date;
}

export type Reviews = Review[];
