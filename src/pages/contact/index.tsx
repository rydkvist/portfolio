import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import React from 'react';
import { ContactItem } from '../../components/Contact/ContactItem';
import {
  APP_TITLE_SUFFIX,
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_ADDRESS,
  PERSONAL_EMAIL,
  PERSONAL_PHONE_NUMBER,
} from '../../config';

const Contact = () => {
  return (
    <div className="mx-auto">
      <DefaultSeo title={`Contact – ${APP_TITLE_SUFFIX}`} />
      <Script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js" />

      <div className="flex flex-col md:flex-row justify-center max-w-screen-md mx-auto items-center pt-8 md:pt-12">
        <ContactItem label="E-mail" value={PERSONAL_EMAIL} href={`mailto:${PERSONAL_EMAIL}`} iconName="mail-outline" />
        <ContactItem
          label="Phone"
          value={PERSONAL_PHONE_NUMBER}
          href={`tel:${PERSONAL_PHONE_NUMBER}`}
          iconName="call-outline"
        />
        <ContactItem
          label="Location"
          value={PERSONAL_ADDRESS}
          href={`https://maps.google.com/maps/search/${PERSONAL_ADDRESS}`}
          iconName="location-outline"
        />
      </div>
      <ul className="flex flex-row justify-center mt-2 md:mt-8 list-none w-full p-8">
        <li className="mr-2">
          <a
            className="p-4 text-black dark:text-white text-2xl hover:opacity-75"
            href={LINKEDIN_URL}
            title="LinkedIn – Niklas Rydkvist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg" />
          </a>
        </li>
        <li>
          <a
            className="p-4 text-black dark:text-white text-2xl hover:opacity-75"
            href={GITHUB_URL}
            title="GitHub – Nojze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
