import CopyIcon from '../../../public/images/feather/copy16x16.svg';

type ItemProps = {
  label: string;
  value: string;
  href: string;
  icon: JSX.Element;
  showCopy?: boolean;
};

export const ContactItem = ({ label, value, href, icon, showCopy = false }: ItemProps) => {
  const copyValueToClipboard = () => {
    // TODO: Add copy item value to clipboard
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <p className="flex flex-row items-center text-base leading-relaxed text-neutral-500 dark:text-neutral-300">
        {icon}
        <span className="mr-1.5" /> {label}
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
            className="inline-flex items-center text-white rounded-md text-sm px-3 py-2 text-center bg-blue-600 hover:bg-blue-700"
          >
            <CopyIcon /> <span className="ml-1.5">Copy</span>
          </button>
        )}
      </div>
    </div>
  );
};
