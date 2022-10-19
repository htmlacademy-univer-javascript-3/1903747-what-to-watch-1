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
