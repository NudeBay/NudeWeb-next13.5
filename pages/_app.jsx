import styles from '../assets/scss/global.scss';
import Navbar from '../assets/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className={`rightPanel`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
