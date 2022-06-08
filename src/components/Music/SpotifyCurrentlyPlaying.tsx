import { useQuery } from 'react-query';
import { Heading } from '../Heading';

export const SpotifyCurrentlyPlaying = () => {
  const { isLoading, error, data } = useQuery('spotify-now-playing', () => {
    return fetch('/api/spotify/now-playing').then(res => res.json());
  });

  if (isLoading)
    return (
      <Heading as="h3" className="text-center">
        Loading...
      </Heading>
    );

  if (error) return <Heading as="h3" className="text-center">{`An error has occurred: ${error}`}</Heading>;

  return (
    <div className="flex flex-col items-center">
      <Heading as="h3" className="text-center mb-4">
        Currently listening to
      </Heading>
      <a
        target="_blank"
        rel="noreferrer"
        href={data?.isPlaying ? data.songUrl : 'https://open.spotify.com/user/1123710739'}
        className="relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
      >
        <div className="w-16">
          {data?.isPlaying ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-16 shadow-sm" src={data?.albumImageUrl} alt={data?.album} />
          ) : (
            // <SiSpotify size={64} color={'#1ED760'} />
            <></>
          )}
        </div>

        <div className="flex-1">
          <p className="font-bold component">{data?.isPlaying ? data.title : 'Not Listening'}</p>
          <p className="text-xs font-dark">{data?.isPlaying ? data.artist : 'Spotify'}</p>
        </div>
        <div className="absolute bottom-1.5 right-1.5">{/* <SiSpotify size={20} color={'#1ED760'} /> */}</div>
      </a>

      {/* {JSON.stringify(data)} */}
    </div>
  );
};
