import styles from './loading-main.module.css';

function LoadingMain(): JSX.Element {
  return (
    <>
      <section className={`${styles.bgImage}`}>
        <div className={styles.bgImage}>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a style={{ background: '#CCCCCC' }} className="logo__link">
              <span style={{ color: '#AAAAAA' }} className="logo__letter logo__letter--1">W</span>
              <span style={{ color: '#AAAAAA' }} className="logo__letter logo__letter--2">T</span>
              <span style={{ color: '#AAAAAA' }} className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className={`user-block__avatar ${styles.blinkingElement}`}>
                <img src="img/grey-avatr.png" alt="" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <span className={`${styles.textSquareGrey} ${styles.blinkingElement}`}></span>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className={`film-card__poster ${styles.blinkingElement}`}>
              <img src="img/bg-image-grey.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className={`${styles.textSquareGrey} ${styles.blinkingElement}`} style={{ width: '450px' }}></h2>
              <p className="film-card__meta">
                <span className={`${styles.textSquareGrey} ${styles.blinkingElement}`} style={{ height: '20px' }}></span>
              </p>

              <div className="film-card__buttons">
                <span className={`${styles.buttonGrey} ${styles.blinkingElement}`}></span>
                <span className={`${styles.buttonGrey} ${styles.blinkingElement}`}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

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

          <div className="catalog__films-list">
            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>

            <article className={`small-film-card catalog__films-card ${styles.blinkingElement}`}>
              <div className="small-film-card__image">
                <img src="img/bg-empty-film.jpg" alt="Revenant" width="280" height="175" />
              </div>
            </article>
          </div>

          <div className={`catalog__more ${styles.blinkingElement}`}>
            <span className={styles.showMoreButton}></span>
          </div>
        </section>

        <footer className="page-footer">
          <div className={`logo ${styles.blinkingElement}`}>
            <a style={{ background: '#251818' }} className="logo__link logo__link--light">
              <span style={{ color: '#392424' }} className="logo__letter logo__letter--1">W</span>
              <span style={{ color: '#392424' }} className="logo__letter logo__letter--2">T</span>
              <span style={{ color: '#392424' }} className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LoadingMain;

