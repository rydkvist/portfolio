import { Icon, IconName } from '@/components/Icon';

type ItemProps = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export const ContactItem = ({ label, value, href, icon }: ItemProps) => (
  <div className="flex w-full flex-row items-baseline justify-start gap-2">
    <span aria-label={label} className="self-center font-medium text-neutral-700 dark:text-neutral-300">
      <Icon name={icon} width={18} height={18} />
    </span>

    <a
      href={href}
      title={value}
      className="text-md font-sans font-semibold text-neutral-800 hover:underline dark:text-neutral-200"
    >
      {value}
    </a>
  </div>
);
