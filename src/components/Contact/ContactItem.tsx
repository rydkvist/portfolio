import { useState } from 'react';
import CopyIcon from '../../../public/images/feather/copy16x16.svg';
import CheckIcon from '../../../public/images/feather/check16x16.svg';
import { navigationAccessibilityClass } from '../Navigation/NavigationIcons';

type ItemProps = {
  label: string;
  value: string;
  href: string;
  icon: JSX.Element;
  showCopy?: boolean;
};

export const ContactItem = ({ label, value, href, icon, showCopy = false }: ItemProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyValueToClipboard = () => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <p className="flex flex-row items-center text-base leading-relaxed text-neutral-500 dark:text-neutral-300">
        {icon}
        <span className="mr-1.5" /> {label}
      </p>
      <div className="flex flex-row w-full flex-wrap justify-between items-center">
        <a
          href={href}
          title={value}
          className={`text-lg font-medium leading-relaxed text-neutral-600 dark:text-neutral-200 mr-3 ${navigationAccessibilityClass}`}
        >
          {value}
        </a>

        {showCopy && (
          <button
            type="button"
            onClick={copyValueToClipboard}
            onBlur={() => setHasCopied(false)}
            className={`inline-flex items-center rounded-md text-sm text-black dark:text-white px-3 py-2 text-center bg-transparent border border-neutral-300 hover:bg-neutral-300 dark:border-neutral-600 hover:dark:bg-neutral-600 ${
              hasCopied && `text-green-500 dark:text-green-300`
            }`}
          >
            {hasCopied ? <CheckIcon /> : <CopyIcon />} <span className="ml-1.5">{hasCopied ? 'Copied' : 'Copy'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
