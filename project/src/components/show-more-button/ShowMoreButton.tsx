import { useAppDispatch, useAppSelector } from '../../hooks';
import { increaseAmountToShow, resetAmountToShow } from '../../store/main-data/main-data';
import { getAmountToShow } from '../../store/main-data/main-data-selectors';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const howMuchToShow = useAppSelector(getAmountToShow);

  const showMoreButtonHandler = (value: number) => {
    if (value === 8) {
      dispatch(increaseAmountToShow());
      return;
    }
    dispatch(resetAmountToShow());
  };
  return (
    <div className="catalog__more">
      <button onClick={() => showMoreButtonHandler(howMuchToShow)} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
