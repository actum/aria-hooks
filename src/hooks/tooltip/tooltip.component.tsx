import React, { useState } from 'react';
import { useAriaToolTip } from '.';
import { ToolTipProps, TooltipButtonProps, TooltipTipProps } from './types';
import Button from '../../styles/components/Button';
import { StyledTooltip, TooltipContainer } from './tooltip.styles';

export const Tooltip = () => {
  const [isShowing, setIsShowing] = useState(false);

  const { buttonProps, toolTipProps } = useAriaToolTip({
    id: 'tooltip',
    isShowing,
    onRelease: () => setIsShowing(true),
    onDismiss: () => setIsShowing(false),
  });

  return (
    <TooltipContainer>
      <Button variation="secondary" {...buttonProps}>
        See tooltip
      </Button>
      <StyledTooltip {...toolTipProps}>I am the tool tip </StyledTooltip>
    </TooltipContainer>
  );
};

export const TooltipComponentProps: React.FC<ToolTipProps> = () => null;
export const TooltipComponentButtonProps: React.FC<TooltipButtonProps> = () =>
  null;
export const TooltipComponentTipProps: React.FC<TooltipTipProps> = () => null;
