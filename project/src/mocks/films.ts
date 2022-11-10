import { Films } from '../types/types';
import { reviewsArray } from './reviews';

export const filmMocks: Films = [
  {
    id: 1,
    name : 'Bohemian Rhapsody',
    posterImageGreat : 'img/bohemian-rhapsody.jpg',
    posterImageSmall : 'img/bohemian-rhapsody.jpg',
    genre: 'biography',
    releaseDate: new Date(),
    score: 7.9,
    numOfScores: 240,
    actors : [
      'Rami Malek',
      'Lucy Boynton'
    ],
    director: 'Me',
    overview: 'asdjksadosa',
    details: 'asdkasodosa',
    reviews: reviewsArray,
    videoSrc: 'https://10.react.pages.academy/static/film/video/matrix.mp4'
  },
  {
    id: 2, name : 'Pulp Fiction',
    posterImageGreat : 'img/pulp-fiction.jpg',
    posterImageSmall : 'img/pulp-fiction.jpg',
    genre: 'criminal',
    releaseDate: new Date(),
    score: 8.8,
    numOfScores: 520,
    actors : [
      'Samuel L. Jackson',
      'John Travolta',
      'Bruce Willis',
      'Quentin Tarantino',
      'Ving Rames',
      'Uma Thurman',
      'Tim Roth'
    ],
    director: 'Quentin Tarantino',
    overview: 'Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary',
    details: 'asdkasodosa',
    reviews: reviewsArray,
    videoSrc: 'https://10.react.pages.academy/static/film/video/matrix.mp4'
  },
  {
    id: 3,
    name : 'Shutter Island',
    posterImageGreat : 'img/shutter-island.jpg',
    posterImageSmall : 'img/shutter-island.jpg',
    genre: 'thriller',
    releaseDate: new Date(),
    score: 8.4,
    numOfScores: 210,
    actors : [
      'Leonardo DiCaprio',
      'Ben Kingsly',
      'Mark Ruffalo',
      'Michelle Williams'
    ],
    director: 'Martin Scorsese',
    overview: 'asdjksadosa',
    details: 'asdkasodosa',
    reviews: reviewsArray,
    videoSrc: 'https://10.react.pages.academy/static/film/video/matrix.mp4'
  }
];
