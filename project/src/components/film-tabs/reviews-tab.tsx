import { Review, Reviews } from '../../types/types';
import { months } from '../../const';

type ReviewsTabProps = {
  reviews: Reviews;
}

function RenderSingleReview(review: Review): JSX.Element {
  const date = review.publishDate;
  const month = months[Math.round(date.getMonth() * 10) / 10];
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>
        <footer className="review__details">
          <cite className="review__author">{review.userName}</cite>
          <time className="review__date" dateTime={`${year}-${date.getMonth()}-${day}`}>{month} {day}, {year}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.score}</div>
    </div>
  );
}

function ReviewsTab({ reviews }: ReviewsTabProps): JSX.Element {
  const firstColumnArray = reviews.filter((review, index) => index % 2 === 0);
  const secondColumnArray = reviews.filter((review, index) => index % 2 === 1);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnArray.map((review) => RenderSingleReview(review))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnArray.map((review) => RenderSingleReview(review))}
      </div>
    </div>
  );
}

export default ReviewsTab;