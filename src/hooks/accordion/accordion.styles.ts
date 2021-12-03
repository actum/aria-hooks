import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import {
  borders,
  colors,
  fontSizes,
  fontWeights,
  spacers,
  transitions,
} from '../../styles/variables';

export const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;

  text-align: left;
`;

export const StyledTabBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacers['spacer-2']};
  padding: ${spacers.defaultButtonPadding};

  background-color: ${(props: { theme: colorTheme }) =>
    props.theme.secondaryBackground};
  color: ${(props: { theme: colorTheme }) => props.theme.textColor};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.m};
  outline: none;
  cursor: pointer;
  border: ${borders.defaultWidth} solid ${colors.black};

  transition-property: ${transitions.buttonProperties};
  transition-timing-function: ${transitions.timingFunction};
  transition-duration: ${transitions.defaultDuration};

  &:hover {
    color: ${colors.red};
    border-color: ${colors.red};
  }

  &:focus {
    box-shadow: ${(props: { theme: colorTheme }) =>
      props.theme.isDarkTheme
        ? borders.focusOutlineDarkMode
        : borders.focusOutlineLightMode};
  }

  &[aria-expanded='true'] {
    margin-bottom: 0;
    .btn__icon {
      transform: rotate(-90deg);
    }
  }

  .btn__icon {
    vertical-align: middle;
    margin-left: ${spacers['spacer-6']};

    fill: ${colors.red};
    transform: rotate(90deg);
  }
`;

export const StyledPanel = styled.div`
  width: 100%;
  padding: ${spacers['spacer-3']} ${spacers['spacer-4']};

  font-size: ${fontSizes.m};
  color: ${(props: { theme: colorTheme }) => props.theme.textColor};
`;
