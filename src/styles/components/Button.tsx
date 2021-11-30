import React from 'react';

import { PrimaryBtn, SecondaryBtn, UniqueBtn } from '../sharedComponents';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation: 'primary' | 'secondary' | 'unique';
}

const Button: React.FC<Props> = ({ variation, children, ...rest }) => {
  switch (variation) {
    case 'primary': {
      return (
        <PrimaryBtn {...rest}>
          <>
            {children}

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon btn__icon"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </>
        </PrimaryBtn>
      );
    }
    case 'secondary': {
      return (
        <SecondaryBtn {...rest}>
          {children}
          <span className="icon btn__icon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </span>
        </SecondaryBtn>
      );
    }
    case 'unique': {
      return (
        <UniqueBtn {...rest}>
          {children}
          <span className="icon btn__icon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </span>
        </UniqueBtn>
      );
    }
  }
};

export default Button;
