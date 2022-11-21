import { useAppDispatch, useAppSelector } from '../../hooks';
import { increaseAmountToShow, resetAmountToShow } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const howMuchToShow = useAppSelector((store) => store.amountToShow);

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
