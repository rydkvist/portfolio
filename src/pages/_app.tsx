import '../styles/globals.css';
import '../styles/hamburgers.css';

import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <section role="main" className="min-h-full h-full block">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
};

export default App;
