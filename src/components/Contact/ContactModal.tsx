import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, PERSONAL_ADDRESS, PERSONAL_EMAIL, PERSONAL_PHONE_NUMBER } from '../../config';
import { useSettings } from '../../context/SettingsProvider';
import { TabNavigationItem } from '../Navigation/TabNavigationItem';
import { ContactItem } from './ContactItem';

export const ContactModal = () => {
  const { isContactModalOpen, setIsContactModalOpen } = useSettings();

  const closeModal = () => setIsContactModalOpen(false);

  return (
    <div
      tabIndex={-1}
      hidden={!isContactModalOpen}
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full h-full h-modal bg-black bg-opacity-70`}
    >
      <div className="relative p-4 w-full mx-auto max-w-2xl h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-neutral-600">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact – Niklas Rydkvist</h3>
            <button
              type="button"
              onClick={closeModal}
              className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-wrap px-6 py-4 space-y-4">
            <ContactItem
              label="E-mail"
              value={PERSONAL_EMAIL}
              href={`mailto:${PERSONAL_EMAIL}`}
              iconName="mail-outline"
              showCopy
            />
            <ContactItem
              label="Phone"
              value={PERSONAL_PHONE_NUMBER}
              href={`tel:${PERSONAL_PHONE_NUMBER}`}
              iconName="call-outline"
              showCopy
            />
            <ContactItem
              label="Location"
              value={PERSONAL_ADDRESS}
              href={`https://maps.google.com/maps/search/${PERSONAL_ADDRESS}`}
              iconName="location-outline"
            />

            <ul className="flex flex-row flex-wrap -ml-2 list-none">
              <TabNavigationItem label="github-tab" />
              <TabNavigationItem label="linkedin-tab" />
              <TabNavigationItem label="twitter-tab" />
            </ul>
          </div>

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-neutral-200 dark:border-neutral-600">
            <button
              type="button"
              onClick={closeModal}
              className="text-white dark:text-black bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-200 dark:hover:bg-neutral-300 font-medium rounded-md text-sm px-8 py-2.5 text-center"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
