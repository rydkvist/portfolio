type ItemProps = {
  label: string;
  value: string;
  iconName: string;
  href: string;
};

export const ContactItem = ({ label, value, href, iconName }: ItemProps) => (
  <div className="flex flex-col justify-center items-center mb-12 md:mb-0 mr-0 md:mx-6">
    <div className="text-4xl text-black dark:text-white -mb-1 md:-mb-2">
      <ion-icon name={iconName}></ion-icon>
    </div>
    <div className="text-center">
      <h6 className="text-2xl text-black dark:text-white text-opacity-75 hidden md:block ">{label}</h6>
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
