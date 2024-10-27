import React from 'react';
import Check16 from '../public/icons/check16x16.svg';
import Code16 from '../public/icons/code16x16.svg';
import Copy16 from '../public/icons/copy16x16.svg';
import ExternalLink16 from '../public/icons/external-link.svg';
import GitHub16 from '../public/icons/github16x16.svg';
import LinkedIn16 from '../public/icons/linkedin16x16.svg';
import Mail16 from '../public/icons/mail16x16.svg';
import MapPin16 from '../public/icons/map-pin16x16.svg';
import MessageCircle16 from '../public/icons/message-circle16x16.svg';
import Music16 from '../public/icons/music16x16.svg';
import Phone16 from '../public/icons/phone16x16.svg';
import TrendingUp16 from '../public/icons/trending-up16x16.svg';
import User16 from '../public/icons/user16x16.svg';

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
}

const iconMap = {
  check: Check16,
  code: Code16,
  copy: Copy16,
  externalLink: ExternalLink16,
  github: GitHub16,
  linkedin: LinkedIn16,
  mail: Mail16,
  mapPin: MapPin16,
  messageCircle: MessageCircle16,
  music: Music16,
  phone: Phone16,
  trendingUp: TrendingUp16,
  user: User16,
};

export const Icon: React.FC<IconProps> = ({ name, width = 16, height = 16 }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <IconComponent width={width} height={height} />;
};
