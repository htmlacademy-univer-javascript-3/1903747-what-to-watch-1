import styles from '../loading-main.module.css';

function LoadingPromo(): JSX.Element {
  return (
    <section className={`${styles.bgImage}`}>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className={`logo ${styles.blinkingElement}`}>
          <a style={{ background: '#CCCCCC', border: 'none' }} className="logo__link">
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
  );
}

export default LoadingPromo;

