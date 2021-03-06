import { SELECTED_CLASS_NAME } from './controller';
import styled from 'styled-components';

import {
  borders,
  colors,
  fontSizes,
  fontWeights,
  spacers,
  transitions,
} from '../../styles/variables';
import { colorTheme } from '../../styles/themes';

const listboxStyleVariables = {
  wrapperHeight: '290px',
  wrapperWidth: 'max-content',
  textTransform: 'capitalize',
  hoverItemBackgroundColor: colors.red + '22',
  focusItemBackgroundColor: colors.red,
};

export const Wrapper = styled.div`
  position: relative;

  height: ${listboxStyleVariables.wrapperHeight};
  width: ${listboxStyleVariables.wrapperWidth};

  color: ${colors.black};

  button {
    display: flex;
    align-items: center;
    padding: ${spacers.defaultButtonPadding};

    background-color: ${(props: { theme: colorTheme }) =>
      props.theme.secondaryBackground};
    color: ${(props: { theme: colorTheme }) => props.theme.textColor};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.m};
    text-transform: ${listboxStyleVariables.textTransform};
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

    .btn__icon {
      vertical-align: middle;
      margin-left: ${spacers['spacer-6']};

      fill: ${colors.red};
      transform: rotate(90deg);
    }
  }

  .listbox {
    position: absolute;
    top: calc(100% + 4px);

    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: 0;
    margin: 0;

    list-style: none;
    background-color: ${(props: { theme: colorTheme }) =>
      props.theme.primaryBackground};
    color: ${(props: { theme: colorTheme }) => props.theme.textColor};
    border: ${borders.defaultWidth} solid ${colors.black};
    border-radius: 0;

    li {
      position: relative;

      box-sizing: border-box;
      width: calc(100% + 2px);
      padding: ${spacers['spacer-3']};
      margin: -1px;

      text-align: center;
      font-size: ${fontSizes.m};
      font-weight: ${fontWeights.bold};
      text-transform: ${listboxStyleVariables.textTransform};
      cursor: pointer;

      &:hover:not(.${SELECTED_CLASS_NAME}) {
        background-color: ${listboxStyleVariables.hoverItemBackgroundColor};
      }

      &.${SELECTED_CLASS_NAME} {
        background-color: ${listboxStyleVariables.focusItemBackgroundColor};
      }

      &.${SELECTED_CLASS_NAME} {
        color: ${colors.white};
      }
    }

    &:focus {
      outline: none;
    }
  }

  .listbox[aria-hidden='true'] {
    display: none;
  }
`;
