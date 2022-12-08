import styles from './spinner-styles.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.loading__container}>
      <div className={styles.spinner}></div>
      <h1 className={styles.loading__title}></h1>
    </div>
  );
}

export default LoadingScreen;
