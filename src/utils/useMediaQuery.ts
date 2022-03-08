import { useEffect, useState } from 'react';
import breakpoints from '../styles/breakpoints';

type MediaBreakpoints = 'mobile' | 'tablet' | 'desktop';

export const useMediaQuery = (mediaBreakpoint: MediaBreakpoints): boolean => {
  const query = `(max-width: ${getMediaBreakpoint(mediaBreakpoint)}px)`;
  const mediaQueryList = typeof window !== 'undefined' ? window.matchMedia(query) : null;

  const [matches, setMatches] = useState(mediaQueryList?.matches ?? false);

  useEffect(() => {
    const handler = () => setMatches(mediaQueryList?.matches ?? false);
    mediaQueryList?.addEventListener('change', handler);

    return () => mediaQueryList?.removeEventListener('change', handler);
  }, [mediaQueryList]);

  return matches;
};

const getMediaBreakpoint = (mediaBreakpoint: MediaBreakpoints): number => {
  switch (mediaBreakpoint) {
    case 'desktop':
      return breakpoints.breakpoints.lg;
    case 'tablet':
      return breakpoints.breakpoints.lg;
    case 'mobile':
      return breakpoints.breakpoints.md;
  }
};
