import React, { useState } from 'react';
import { useAriaToolTip, ToolTipProps } from '.';

import styled from 'styled-components';
import { theme } from '../shared_styled_components/theme';
import { ThemeProvider } from 'styled-components';

import Button from '../components/Button';

const StyledTooltip = styled.div`
  display: initial;
  width: max-content;
  padding: 11px 15px;
  border-radius: 6px;
  background: black;
  color: white;
  position: absolute;
  left: 110%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-right-color: black;
  }
`;

const TooltipContainer = styled.div`
  width: max-content;
  position: relative;
`;

export const Tooltip: React.FC<ToolTipProps> = () => {
  const [isShowing, setIsShowing] = useState(false);

  const { buttonProps, toolTipProps } = useAriaToolTip({
    id: 'tooltip',
    isShowing,
    onRelease: () => setIsShowing(true),
    onDismiss: () => setIsShowing(false),
  });

  return (
    <ThemeProvider theme={theme}>
      <TooltipContainer>
        <Button variation="primary" {...buttonProps}>
          See tooltip
        </Button>
        <StyledTooltip {...toolTipProps}>I am the tool tip </StyledTooltip>
      </TooltipContainer>
    </ThemeProvider>
  );
};

export default {
  title: 'Aria Component/Tooltip',
  component: Tooltip,
};
