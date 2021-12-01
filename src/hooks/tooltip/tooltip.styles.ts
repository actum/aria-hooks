import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import { spacers } from '../../styles/variables';

const tooltipStyleVariables = {
  arrowSize: spacers['spacer-2'],
  backgroundColor: (props: { theme: colorTheme }) =>
    props.theme.secondaryBackground,
  color: (props: { theme: colorTheme }) => props.theme.textColor,
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
