import { DefaultSeo } from 'next-seo';
import { Heading } from '../../components/Heading';
import { SpotifyCurrentPlayback } from '../../components/Music/SpotifyCurrentPlayback';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../../config';

const Music = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Music – ${APP_TITLE_SUFFIX}`} />

        <Heading as="h1">Music</Heading>
        <SpotifyCurrentPlayback />

        {/** TODO: Add a list of the most played songs for the last 4 weeks, or something else, with fade in animation */}
      </>
    </PageWrapper>
  );
};

export default Music;
