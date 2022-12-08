export type reviewUser = {
  id: number;
  name: string;
}

export type Review = {
  id: number;
  user: reviewUser;
  rating: number;
  comment: string;
  date: string;
}

export type ApiReview = {
	id: number;
	comment: string;
	rating: number;
}

export type Reviews = Review[];

