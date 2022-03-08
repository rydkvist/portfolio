type ItemProps = {
  label: string;
  value: string;
  iconName: string;
  href: string;
};

export const ContactItem = ({ label, value, href, iconName }: ItemProps) => (
  // create a item component to show an icon, label and value
  <li className="flex items-center mb-4">
    <i className={`fas fa-${iconName} fa-2x mr-4`} />
    <div>
      <p className="text-xl font-semibold">{label}</p>
      <p className="text-lg">{value}</p>
    </div>
  </li>
);
