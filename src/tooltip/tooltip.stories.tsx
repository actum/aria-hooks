import React, { useState } from 'react';
import { useAriaToolTip, ToolTipProps } from '.';

import styled from 'styled-components';

const StyledToolTip = styled.div`
  display: none;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid black;
  &.tooltip__visible {
    display: initial;
  }
`;

export const ToolTip: React.FC<ToolTipProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { buttonProps, toolTipProps } = useAriaToolTip({
    id: 'tooltip',
    isOpen,
    onDismiss: () => setIsOpen(false),
  });

  return (
    <>
      <button
        {...buttonProps}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        See tooltip
      </button>
      <StyledToolTip
        {...toolTipProps}
        className={isOpen ? 'tooltip__visible' : ''}
      >
        {'I am the tool tip :)'}
      </StyledToolTip>
    </>
  );
};

export default {
  title: 'Aria Component/ToolTip',
  component: ToolTip,
};
