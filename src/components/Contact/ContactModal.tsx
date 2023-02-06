import React, { useCallback, useEffect, useRef } from 'react';
import {
  PERSONAL_ADDRESS,
  PERSONAL_ADDRESS_WITH_GOOGLE_MAPS,
  PERSONAL_EMAIL,
  PERSONAL_PHONE_NUMBER,
} from '../../config';
import { useSettings } from '../../context/SettingsProvider';
import { TabNavigationItem } from '../Navigation/TabNavigationItem';
import { ContactItem } from './ContactItem';
import MailIcon from '../../../public/images/feather/mail16x16.svg';
import TelephoneIcon from '../../../public/images/feather/phone16x16.svg';
import LocationIcon from '../../../public/images/feather/map-pin16x16.svg';
import { navigationAccessibilityClass } from '../Navigation/NavigationIcons';

export const ContactModal = () => {
  const { isContactModalOpen, setIsContactModalOpen } = useSettings();

  const modalRef = useRef(null);

  const closeModal = useCallback(() => setIsContactModalOpen(false), [setIsContactModalOpen]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal, isContactModalOpen]);

  useEffect(() => {
    if (isContactModalOpen) {
      modalRef.current.focus();
    }
  }, [isContactModalOpen]);

  return (
    isContactModalOpen && (
      <div
        tabIndex={-1}
        role="dialog"
        aria-labelledby="Contact Niklas Rydkvist"
        aria-modal="true"
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full h-full h-modal bg-black bg-opacity-70`}
      >
        <div className="relative p-4 w-full mx-auto max-w-lg h-full">
          <div
            ref={modalRef}
            className="overflow-auto relative py-8 px-6 bg-neutral-200 rounded-xl shadow dark:bg-neutral-800"
          >
            <div className="flex justify-between items-start mt-0">
              <h3 className="text-xl text-neutral-900 dark:text-white font-semibold">Contact</h3>
              <button
                type="button"
                onClick={closeModal}
                className={`text-neutral-400 bg-transparent hover:bg-neutral-300 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white ${navigationAccessibilityClass}`}
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

            <div className="flex flex-col flex-wrap py-6 space-y-4">
              <ContactItem
                label="E-mail"
                value={PERSONAL_EMAIL}
                href={`mailto:${PERSONAL_EMAIL}`}
                icon={<MailIcon />}
                showCopy
              />
              <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

              <ContactItem
                label="Phone"
                value={PERSONAL_PHONE_NUMBER}
                href={`tel:${PERSONAL_PHONE_NUMBER}`}
                icon={<TelephoneIcon />}
                showCopy
              />

              <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

              <ContactItem
                label="Location"
                value={PERSONAL_ADDRESS}
                href={PERSONAL_ADDRESS_WITH_GOOGLE_MAPS}
                icon={<LocationIcon />}
              />

              <hr className="w-full bg-neutral-300 dark:bg-neutral-700 opacity-10" />

              <ul className="flex flex-row flex-wrap -ml-2 list-none">
                <TabNavigationItem label="github-tab" />
                <TabNavigationItem label="linkedin-tab" />
              </ul>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                onClick={closeModal}
                className={`text-white dark:text-black bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-200 dark:hover:bg-neutral-300 font-medium rounded-md text-sm px-8 py-2.5 text-center ${navigationAccessibilityClass}`}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
