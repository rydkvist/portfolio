import { TabNavigationItem } from '@/features/sitewide/TabNavigationItem';
import { ContactItem } from './ContactItem';
import { common } from '@/lib/common';
import { appLinks } from '@/lib/app-links';

const { myself } = common;
const { linkedin, github } = appLinks;

export const ContactList = () => {
  const hrClassname = 'w-full bg-neutral-300 dark:bg-neutral-700 opacity-100 dark:opacity-30';

  return (
    <div className="border-neutral-300 dark:border-neutral-700 border flex flex-col flex-wrap pb-8 pt-10 gap-3 shadow-lg px-8 rounded-xl transition-all ease-in hover:-translate-y-2">
      <ContactItem label="E-mail" value={myself.email} href={`mailto:${myself.email}`} icon="mail" showCopy />
      <hr className={hrClassname} />

      <ContactItem label="Phone" value={myself.phoneNumber} href={`tel:${myself.phoneNumber}`} icon="phone" showCopy />
      <hr className={hrClassname} />

      <ContactItem label="Location" value={myself.location} href={myself.googleMapsLocation} icon="mapPin" />
      <hr className={hrClassname} />

      <ul className="flex flex-row flex-wrap">
        <TabNavigationItem label={github.name} href={github.href} icon="github" />
        <TabNavigationItem label={linkedin.name} href={linkedin.href} icon="linkedin" />
      </ul>
    </div>
  );
};
