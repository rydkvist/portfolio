import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { SpotifyCurrentPlayback } from '../components/Music/SpotifyCurrentPlayback';
import { SpotifyTopTracks } from '../components/Music/SpotifyTopTracks';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

const Music = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <DefaultSeo title={`Music – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1">Music</Heading>
        <p className="text-neutral-700 text-center dark:text-neutral-300 mb-4">
          Find your next musical discovery with me 🎧
        </p>

        <SpotifyCurrentPlayback />

        <hr className="my-2 divide-neutral-800 dark:divide-neutral-200" />
        <SpotifyTopTracks />
      </>
    </PageWrapper>
  );
};

export default Music;
