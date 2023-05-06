import '../assets/css/style.css';
import Navbar from '../assets/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Navbar />
      <Component {...pageProps} />
    </html>
  );
}

export default MyApp
