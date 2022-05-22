import { DefaultSeo } from 'next-seo';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

// TODO: Add Spotify Tracker of current song I'm listening to, and most played playlists / artists
const Music = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Music – ${APP_TITLE_SUFFIX}`} />
        <h1 className="text-3xl text-center mb-8">Coming soon..</h1>
      </>
    </PageWrapper>
  );
};

export default Music;
