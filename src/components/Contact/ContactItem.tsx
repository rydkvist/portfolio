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
};
