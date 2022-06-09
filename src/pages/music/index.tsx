import { DefaultSeo } from 'next-seo';
import { Heading } from '../../components/Heading';
import { SpotifyCurrentPlayback } from '../../components/Music/SpotifyCurrentPlayback';
import { SpotifyTopTracks } from '../../components/Music/SpotifyTopTracks';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../../config';

const Music = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Music – ${APP_TITLE_SUFFIX}`} />

        <Heading as="h1">Music</Heading>
        <SpotifyCurrentPlayback />

        <hr className="my-2 divide-neutral-800 dark:divide-neutral-200" />

        <SpotifyTopTracks />
      </>
    </PageWrapper>
  );
};

export default Music;
