export enum AppRouteProps {
  Main = '/',
  SignIn = '/login',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  MyList = '/mylist',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH'
}

export enum FilmTabsStatus {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS'
}

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const genres = [
  'All genres',
  'Action',
  'Adventure',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Fantasy',
  'Romance',
  'Sci-Fi',
  'Thriller'
];
