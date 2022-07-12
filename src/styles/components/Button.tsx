import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { StyledBtn } from '../shared';
import { btnThemes } from '../themes';
import { fontSizes } from '../variables';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'primary' | 'secondary' | 'unique';
}

const Button: React.FC<Props> = ({
  variation = 'primary',
  children,
  ...rest
}) => {
  return (
    <StyledBtn
      theme={{ ...btnThemes[variation], isDarkMode: useDarkMode() }}
      {...rest}
    >
      {children}

      <svg
        width={fontSizes.xl}
        height={fontSizes.xl}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon btn__icon"
      >
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
    </StyledBtn>
  );
};

export default Button;
