import styled from 'styled-components';
import {
  borders,
  colors,
  fontSizes,
  fontWeights,
  spacers,
  transitions,
} from '../../styles/variables';

const tooltipStyleVariables = {
  arrowSize: spacers['spacer-2'],
  backgroundColor: colors.gray,
  color: colors.black,
};

export const StyledTooltip = styled.div`
  position: absolute;
  left: 110%;

  display: initial;
  width: max-content;
  padding: ${spacers['spacer-3']} ${spacers['spacer-4']};

  background: ${tooltipStyleVariables.backgroundColor};
  color: ${tooltipStyleVariables.color};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;

    border: ${tooltipStyleVariables.arrowSize} solid transparent;
    border-right-color: ${tooltipStyleVariables.backgroundColor};
    transform: translateY(-50%);
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  width: max-content;
`;
