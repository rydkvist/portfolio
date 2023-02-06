import { DefaultSeo } from 'next-seo';
import { Description } from '../components/Description';
import { Heading } from '../components/Heading';
import { SpotifyCurrentPlayback } from '../components/Music/SpotifyCurrentPlayback';
import { SpotifyTopTracks } from '../components/Music/SpotifyTopTracks';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

const Music = () => {
  const pageTitle = `Music – ${APP_TITLE_SUFFIX}`;

  return (
    <PageWrapper>
      <DefaultSeo title={pageTitle} />

      <Heading as="h1" className="text-center">
        Music
      </Heading>
      <Description className="text-center">Explore some of my music taste 🎧</Description>

      <SpotifyCurrentPlayback />
      <SpotifyTopTracks />
    </PageWrapper>
  );
};

export default Music;
