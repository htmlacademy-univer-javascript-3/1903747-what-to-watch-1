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
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}

export enum FilmTabsStatus {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS'
}

export enum APIRoute {
  Films = '/films',
  PromoFilm = '/promo',
  Login = '/login',
  Reviews = '/comments',
  Logout = '/logout',
  Favorite = '/favorite'
}

export enum NameSpace {
  MainData = 'MAINDATA',
  User = 'USER',
  Film = 'FILM',
  Player = 'PLAYER'
}

export const TIMEOUT_SHOW_ERROR = 5000;

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
