import { Films } from '../types/types';
import { reviewsArray } from './reviews';

export const filmMocks: Films = [
  {
    id: 1,
    name: 'Bohemian Rhapsody',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    backgroundColor: '#929FA5',
    genre: 'Drama',
    released: 2018,
    rating: 7.9,
    scoresCount: 240,
    starring: [
      'Rami Malek',
      'Lucy Boynton'
    ],
    director: 'Lynne Ramsay',
    description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    reviews: reviewsArray,
    runTime: 201,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    id: 2, name: 'Pulp Fiction',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/pulp-fiction.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
    genre: 'criminal',
    released: 1997,
    rating: 8.8,
    scoresCount: 520,
    starring: [
      'Samuel L. Jackson',
      'John Travolta',
      'Bruce Willis',
      'Quentin Tarantino',
      'Ving Rames',
      'Uma Thurman',
      'Tim Roth'
    ],
    director: 'Quentin Tarantino',
    description: 'Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary',
    reviews: reviewsArray,
    backgroundColor: '#795433',
    runTime: 150,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    id: 3,
    name: 'Shutter Island',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Shutter_Island.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/shutter-island.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Shutter_Island.jpg',
    genre: 'thriller',
    released: 2000,
    rating: 8.4,
    scoresCount: 1201,
    runTime: 138,
    backgroundColor: '#977461',
    starring: [
      'Leonardo DiCaprio',
      'Ben Kingsly',
      'Mark Ruffalo',
      'Michelle Williams'
    ],
    director: 'Martin Scorsese',
    description: 'asdkasodosa',
    reviews: reviewsArray,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Snatch',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Snatch.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Snatch.jpg',
    backgroundColor: '#FDFDFC',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 8.5,
    scoresCount: 716577,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    runTime: 104,
    genre: 'criminal',
    released: 2000,
    id: 4,
    reviews: reviewsArray,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
];
