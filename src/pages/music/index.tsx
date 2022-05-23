import { DefaultSeo } from 'next-seo';
import { Heading } from '../../components/Heading';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX, SHOW_MUSIC_SUMMARY } from '../../config';

// TODO: Add Spotify Tracker of current song I'm listening to, and most played playlists / artists
const Music = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Music – ${APP_TITLE_SUFFIX}`} />
        {SHOW_MUSIC_SUMMARY ? (
          <>
            <Heading as="h1">Music</Heading>
            <Heading as="h3" className="text-center">
              Currently listening to
            </Heading>
          </>
        ) : (
          <Heading as="h1">Coming soon..</Heading>
        )}
      </>
    </PageWrapper>
  );
};

export default Music;
