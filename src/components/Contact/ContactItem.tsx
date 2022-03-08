import { IonIcon } from '@ionic/react';

type ItemProps = {
  label: string;
  value: string;
  iconName: string;
  href: string;
};

export const ContactItem = ({ label, value, href, iconName }: ItemProps) => (
  <div
    className="flex flex-col justify-center items-center mb-12 md:mb-0 mr-0 md:mx-6"
    style={{
      fontFamily: 'Source Sans Pro',
    }}
  >
    <div className="text-4xl -mb-2 md:-mb-4">{/* <IonIcon name={iconName} /> */}</div>
    <div className="text-center">
      <h6 className="text-2xl hidden md:block">{label}</h6>
      <a
        href={href}
        title={value}
        className="text-2xl mt-2 text-white text-opacity-75 md-text-opacity-50 hover:text-opacity-100 focus:text-opacity-100"
      >
        {value}
      </a>
    </div>
  </div>
);
