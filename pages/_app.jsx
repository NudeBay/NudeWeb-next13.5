import styles from '../assets/scss/global.scss';
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#e5194d' startPosition={0.3} />
      <Navbar />
      <main className={`rightPanel`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
