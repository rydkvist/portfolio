import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <section role="main" style={{ height: '100%', minHeight: '100vh', display: 'block', color: '#ffffff' }}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
};

export default App;
