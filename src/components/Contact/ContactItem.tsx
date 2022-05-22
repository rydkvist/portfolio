import { SHOW_NEW_DESIGN } from '../../config';

type ItemProps = {
  label: string;
  value: string;
  href: string;
  iconName?: string;
  showCopy?: boolean;
};

export const ContactItem = ({ label, value, href, iconName, showCopy = false }: ItemProps) => {
  const copyValueToClipboard = () => {
    // TODO: Add copy item value to clipboard
  };

  if (SHOW_NEW_DESIGN) {
    return (
      <div className="flex flex-col items-start justify-start">
        <p className="flex flex-row items-center text-base leading-relaxed text-neutral-500 dark:text-neutral-300">
          {/* TODO: Add 16x16 Feather Icon for Email, Phone, Location  */}
          <ion-icon name={iconName}></ion-icon>
          <span className="mr-1" /> {label}
        </p>
        <div className="flex flex-row flex-wrap justify-between items-center">
          <a
            href={href}
            title={value}
            className="text-lg font-medium leading-relaxed text-neutral-600 dark:text-neutral-200 mr-3"
          >
            {value}
          </a>

          {showCopy && (
            <button
              type="button"
              onClick={copyValueToClipboard}
              className="text-white rounded-md text-sm px-3 py-2 text-center bg-blue-600 hover:bg-blue-700"
            >
              Copy
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mb-12 sm:mb-0 mr-0 sm:mx-6">
      <div className="text-4xl text-black dark:text-white -mb-1 sm:-mb-2">
        <ion-icon name={iconName}></ion-icon>
      </div>
      <div className="text-center">
        <h6 className="text-2xl text-black dark:text-white text-opacity-75 hidden sm:block ">{label}</h6>
        <a
          href={href}
          title={value}
          className="text-2xl mt-2 text-black dark:text-white md-text-opacity-50 hover:text-opacity-100 focus:text-opacity-100"
        >
          {value}
        </a>
      </div>
    </div>
  );
};
