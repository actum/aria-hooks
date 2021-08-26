import React, { useState } from 'react';
import { useAriaToolTip, ToolTipProps } from '.';

import styled from 'styled-components';

const StyledTooltip = styled.div`
  display: initial;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid black;
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
    <>
      <button {...buttonProps}>See tooltip</button>
      <StyledTooltip {...toolTipProps}>{'I am the tool tip :)'}</StyledTooltip>
    </>
  );
};

export default {
  title: 'Aria Component/Tooltip',
  component: Tooltip,
};
