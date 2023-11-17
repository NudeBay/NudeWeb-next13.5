import styles from '../assets/scss/global.scss';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextNProgress color='#e5194d' startPosition={0.3} />
      <Navbar />
      <main className={`rightPanel`}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}

export default MyApp;
