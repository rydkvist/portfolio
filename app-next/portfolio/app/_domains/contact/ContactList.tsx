import { common } from '@/_lib/labels/common';
import { TabNavigationItem } from '../sitewide/TabNavigationItem';
import { ContactItem } from './ContactItem';

const { linkedin, github, myself } = common;

export const ContactList = () => {
  return (
    <div className="flex flex-col flex-wrap py-6 space-y-4">
      <ContactItem label="E-mail" value={myself.email} href={`mailto:${myself.email}`} icon="mail" showCopy />
      <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

      <ContactItem label="Phone" value={myself.phoneNumber} href={`tel:${myself.phoneNumber}`} icon="phone" showCopy />
      <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

      <ContactItem label="Location" value={myself.location} href={myself.googleMapsLocation} icon="mapPin" />
      <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

      <ul className="flex flex-row flex-wrap -ml-2 list-none">
        <TabNavigationItem label={github.name} href={github.href} icon="github" />
        <TabNavigationItem label={linkedin.name} href={linkedin.href} icon="linkedin" />
      </ul>
    </div>
  );
};
