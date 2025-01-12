import { notFound } from 'next/navigation';

export const authenticateQuery = (urlPassword: string) => {
  if (urlPassword !== process.env.ADMIN_PASSWORD_QUERY) {
    notFound();
  }

  return null;
};
