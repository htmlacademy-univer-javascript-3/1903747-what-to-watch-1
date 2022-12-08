import { Link } from 'react-router-dom';

function AddReviewButton({id} : {id: number}): JSX.Element {
  return (
    <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
  );
}

export default AddReviewButton;
