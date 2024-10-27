import { ContactItem } from './ContactItem';
import { common } from '@/lib/common';
import Image from 'next/image';

const { myself } = common;

export const ContactList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-7 rounded-xl border border-neutral-300 px-8 py-12 shadow-lg shadow-neutral-300 md:gap-9 md:px-12 md:py-10 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-700">
      <div className="flex items-center self-center">
        <div className="relative overflow-hidden rounded-full border border-slate-500">
          <Image src="/images/about/NiklasKrakowSquare.jpg" alt="Niklas Rydkvist" width={132} height={132} />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{myself.fullName}</h2>
        <h3 className="text-md font-semibold leading-6">{myself.currentRole}</h3>

        <div className="mt-3 flex flex-col items-start justify-center gap-2 md:mt-2 md:gap-1">
          <ContactItem label="E-mail" value={myself.email} href={`mailto:${myself.email}`} icon="mail" />
          <ContactItem label="Phone" value={myself.phoneNumber} href={`tel:${myself.phoneNumber}`} icon="phone" />
          <ContactItem label="Location" value={myself.location} href={myself.googleMapsLocation} icon="mapPin" />
        </div>
      </div>
    </div>
  );
};
