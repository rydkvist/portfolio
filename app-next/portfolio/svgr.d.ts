declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}
