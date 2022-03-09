import '../styles/globals.css';
import '../styles/hamburgers.css';
import Script from 'next/script';

import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <section role="main" className="min-h-full h-full block">
        <Script src="https://kit.fontawesome.com/260eef81bd.js" crossOrigin="anonymous" />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
};

export default App;
