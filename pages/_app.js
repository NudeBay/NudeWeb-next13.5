import styles from '../assets/scss/global.scss';
import Navbar from '../assets/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
