export const APP_HOME_URL = '/';
export const APP_ABOUT_URL = '/about';
export const APP_PROJECTS_URL = '/projects';
export const APP_INVESTMENTS_URL = '/investments';
export const APP_MUSIC_URL = '/music';

export const APP_WEBSITE_URL = 'https://www.rydkvist.com';
export const APP_TITLE_SUFFIX = 'Niklas Rydkvist';
export const APP_SLOGAN = 'Niklas Rydkvist';
export const APP_DESCRIPTION =
  'Niklas Rydkvist is a Software Engineer based in Stockholm, Sweden. He is passionate about building software that facilitates the day-to-day life of people.';

export const GITHUB_URL = 'https://github.com/rydkvist';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/niklasrydkvist/';
export const SPOTIFY_URL = 'https://open.spotify.com/user/1123710739';

export const PERSONAL_EMAIL = 'niklas@rydkvist.com';
export const PERSONAL_PHONE_NUMBER = '+46 70 377 11 04';
export const PERSONAL_ADDRESS = 'Stockholm, Sweden';
export const PERSONAL_ADDRESS_WITH_GOOGLE_MAPS = `https://maps.google.com/maps/search/${PERSONAL_ADDRESS}`;

const isDevelopment = process.env.VERCEL_ENV === 'development';
export const ABSOLUTE_WEBSITE_URL = isDevelopment ? 'http:/localhost:3000' : 'https://www.rydkvist.com';