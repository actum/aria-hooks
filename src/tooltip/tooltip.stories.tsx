import React, { useState } from 'react';
import { useAriaToolTip, ToolTipProps } from '.';

import styled from 'styled-components';

const StyledTooltip = styled.div`
  display: initial;
  visibility: hidden;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid black;
  &.tooltip__visible {
    visibility: visible;
  }
`;

export const Tooltip: React.FC<ToolTipProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { buttonProps, toolTipProps } = useAriaToolTip({
    id: 'tooltip',
    isOpen,
    onRelease: () => setIsOpen(true),
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
      <StyledTooltip
        {...toolTipProps}
        className={isOpen ? 'tooltip__visible' : ''}
      >
        {'I am the tool tip :)'}
      </StyledTooltip>
    </>
  );
};

export default {
  title: 'Aria Component/Tooltip',
  component: Tooltip,
};
