import { common } from '@/lib/common';
import Image from 'next/image';
import { Icon, IconName } from '@/components/Icon';

const { myself } = common;

export const ContactList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-7 rounded-xl border border-neutral-300 px-8 py-8 shadow-lg shadow-neutral-300 md:gap-9 md:px-12 md:py-10 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-700">
      <div className="flex items-center self-center">
        <div className="relative overflow-hidden rounded-full border border-slate-500">
          <Image src="/images/about/NiklasKrakowSquare.jpg" alt="Niklas Rydkvist" width={148} height={148} />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{myself.fullName}</h2>
        <h3 className="text-md font-semibold leading-5 text-neutral-800 dark:text-neutral-200">{myself.currentRole}</h3>

        <div className="mt-3 flex flex-col items-start justify-center gap-2 md:mt-3">
          <ContactItem label="E-mail" value={myself.email} href={`mailto:${myself.email}`} icon="mail" />
          <ContactItem label="Phone" value={myself.phoneNumber} href={`tel:${myself.phoneNumber}`} icon="phone" />
          <ContactItem label="Location" value={myself.location} href={myself.googleMapsLocation} icon="mapPin" />
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

const ContactItem = ({ label, value, href, icon }: ItemProps) => (
  <div className="flex w-full flex-row items-baseline justify-start gap-2">
    <span aria-label={label} className="self-center font-medium text-neutral-700 dark:text-neutral-300">
      <Icon name={icon} width={18} height={18} />
    </span>

    <a
      href={href}
      title={value}
      className="text-md group relative font-sans font-semibold text-neutral-800 dark:text-neutral-200"
    >
      {value}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-neutral-600 duration-300 group-hover:w-full group-hover:transition-all group-focus:w-full group-focus:transition-all dark:bg-neutral-400" />
    </a>
  </div>
);
