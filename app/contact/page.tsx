import { ContactList } from '@/features/contact/components/ContactList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const Page = () => {
  return (
    <>
      <h1 className="size-xxl mb-16 text-center md:mb-12">Contact</h1>
      <ContactList />
    </>
  );
};

export default Page;
