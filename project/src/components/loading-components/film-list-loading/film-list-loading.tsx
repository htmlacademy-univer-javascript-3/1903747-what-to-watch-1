import styles from '../loading-main.module.css';

function LoadingFilmList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>

      <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
        <div className="small-film-card__image">
          <span className={styles.image}></span>
        </div>
      </article>
    </div>
  );
}

export default LoadingFilmList;

