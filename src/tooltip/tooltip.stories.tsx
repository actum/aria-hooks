import React, { useState } from 'react';
import { useAriaToolTip, ToolTipProps } from '.';

import Button from '../components/Button';
import { StyledTooltip, TooltipContainer } from './tooltip.styles';

export const Tooltip: React.FC<ToolTipProps> = () => {
  const [isShowing, setIsShowing] = useState(false);

  const { buttonProps, toolTipProps } = useAriaToolTip({
    id: 'tooltip',
    isShowing,
    onRelease: () => setIsShowing(true),
    onDismiss: () => setIsShowing(false),
  });

  return (
    <TooltipContainer>
      <Button variation="primary" {...buttonProps}>
        See tooltip
      </Button>
      <StyledTooltip {...toolTipProps}>I am the tool tip </StyledTooltip>
    </TooltipContainer>
  );
};

export default {
  title: 'Aria Component/Tooltip',
  component: Tooltip,
};
