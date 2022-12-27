import React, { ChangeEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostReview } from '../../store/api-actions';
import { getReviews, getReviewsLoading } from '../../store/film-process/film-process-selectors';
import { ApiReview } from '../../types/review';

type ReviewFormProps = {
  backgroundColor: string;
}

function ReviewForm({ backgroundColor }: ReviewFormProps): JSX.Element {
  const id = Number(useParams().id);
  const [formData, setFormData] = React.useState<ApiReview>({
    comment: '',
    rating: 0,
    id: id
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isFormPosting, setIsFormPosting] = React.useState(false);

  const isReviewLoading = useAppSelector(getReviewsLoading);
  const reviewsLength = useAppSelector(getReviews).length;
  const [isPostDisabled, setIsPostDisabled] = React.useState(true);

  useEffect(() => {
    if (!isReviewLoading && isFormPosting) {
      setIsFormPosting(false);
      navigate(-1);
    }
  }, [reviewsLength]);

  const disabledChangeHandle = () => {
    if (formData.rating === 0 || formData.comment.length < 50 || formData.comment.length > 400) {
      setIsPostDisabled(true);
      return;
    }
    setIsPostDisabled(false);
  };

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    disabledChangeHandle();
  };

  const formPost = (event: React.FormEvent) => {
    setIsFormPosting(true);
    event.preventDefault();
    dispatch(fetchPostReview(formData));
    navigate(-1);
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: Number(value) });
    disabledChangeHandle();
  };
  return (
    <form onSubmit={formPost} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">

          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={ratingChangeHandler} checked />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={ratingChangeHandler} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text" style={{ background: backgroundColor }}>
        <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" onChange={reviewTextChangeHandler} disabled={!!isReviewLoading}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!!(isReviewLoading || isPostDisabled)}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
