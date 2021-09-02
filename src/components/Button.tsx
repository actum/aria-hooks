import React from 'react';

import {
  PrimaryBtn,
  SecondaryBtn,
  UniqueBtn,
} from '../shared_styled_components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation: 'primary' | 'secondary' | 'unique';
  // children?: string;
}

const Button: React.FC<Props> = ({ variation, children, ...rest }) => {
  switch (variation) {
    case 'primary': {
      return (
        <PrimaryBtn {...rest}>
          <>
            {children} <span className="icon btn__icon">{'>'}</span>
          </>
        </PrimaryBtn>
      );
    }
    case 'secondary': {
      return (
        <SecondaryBtn {...rest}>
          {children}
          <span className="icon btn__icon">{'>'}</span>
        </SecondaryBtn>
      );
    }
    case 'unique': {
      return (
        <UniqueBtn {...rest}>
          {children}
          <span className="icon btn__icon">{'>'}</span>
        </UniqueBtn>
      );
    }
  }
};

export default Button;
