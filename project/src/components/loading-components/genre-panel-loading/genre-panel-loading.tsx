import styles from '../loading-main.module.css';

function LoadingGenrePanel(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
      <li className="catalog__genres-item">
        <span className={`${styles.textSquare} ${styles.blinkingElement}`}></span>
      </li>
    </ul>
  );
}

export default LoadingGenrePanel;

