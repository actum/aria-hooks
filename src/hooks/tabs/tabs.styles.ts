import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import {
  borders,
  colors,
  fontSizes,
  fontWeights,
  spacers,
} from '../../styles/variables';

export const StyledTabs = styled.div`
  max-width: 400px;
  margin-inline: auto;
`;

export const StyledTabList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: ${spacers['spacer-3']};
    flex-grow: 1;

    font-size: ${fontSizes.m};
    font-weight: ${fontWeights.bold};
    text-transform: capitalize;

    background-color: ${colors.transparent};
    color: ${(props: { theme: colorTheme }) => props.theme.textColor};
    border: 0;
    border-bottom: ${borders.wide} solid ${colors.transparent};
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${colors.red + '22'};
    }

    &:focus {
      box-shadow: ${(props: { theme: colorTheme }) =>
        props.theme.isDarkTheme
          ? borders.focusOutlineDarkMode
          : borders.focusOutlineLightMode};
    }

    &[aria-selected='true'] {
      background-color: ${colors.red + '22'};
      border-color: ${colors.red};
    }
  }
`;

export const StyledTabPanel = styled.div`
  margin-top: ${spacers['spacer-8']};

  color: ${(props: { theme: colorTheme }) => props.theme.textColor};
  outline: none;

  &:focus {
    box-shadow: ${(props: { theme: colorTheme }) =>
      props.theme.isDarkTheme
        ? borders.focusOutlineDarkMode
        : borders.focusOutlineLightMode};
  }

  h2 {
    font-size: ${fontSizes.l};
  }
  p {
    font-size: ${fontSizes.m};
  }
`;
