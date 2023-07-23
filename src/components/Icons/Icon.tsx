import React from 'react';

import * as Icons from './components';
import { ICON } from './interfaces';

interface IProps {
  size?: number;
  color?: string;
  className?: string;
  name: ICON;
}

const iconComponents = {
  [ICON.Telegram]: Icons.Telegram,
  [ICON.WhatsApp]: Icons.WhatsApp,
  [ICON.Logo]: Icons.Logo,
};

export const Icon: React.FC<IProps> = ({ name, size = 24, color = 'currentColor', className }) => {
  const IconComponent = iconComponents[name];

  return IconComponent ? (
    <span className={`${className} anticon`}>
      <IconComponent size={size} color={color} />
    </span>
  ) : null;
};
