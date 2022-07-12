import styled from 'styled-components';
import {
  colors,
  transitions,
  fontSizes,
  spacers,
  borders,
  fontWeights,
} from '../variables';

export const HiddenInfo = styled.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  background: ${colors.backdropMaskColor};
  z-index: 1000;

  &[aria-hidden='true'] {
    display: none;
  }
`;

export const StyledBtn = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: ${fontSizes.m};
  border-radius: ${borders.roundedFull};
  padding: ${spacers.defaultButtonPadding};
  font-weight: ${fontWeights.bold};
  outline: none;
  border: ${borders.defaultWidth} solid ${(props) => props.theme.borderColor};
  display: inline-block;
  transition-property: ${transitions.buttonProperties};
  transition-timing-function: ${transitions.timingFunction};
  transition-duration: ${transitions.defaultDuration};

  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};

  &--disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.theme.hoverBackground
        ? 'background:' + props.theme.hoverBackground
        : ''}
    ${(props) =>
      props.theme.hoverBorderColor
        ? 'border-color:' + props.theme.hoverBorderColor
        : ''}
  }

  &:focus {
    box-shadow: ${(props) =>
      props.theme.isDarkMode
        ? borders.focusOutlineDarkMode
        : borders.focusOutlineLightMode};

    /* If focusBorderColor exist, asign it */
    ${(props) =>
      props.theme.focusBorderColor
        ? 'border-color:' + props.theme.focusBorderColor
        : ''}
  }

  &:hover,
  &:focus {
    .btn__icon {
      transform: translateX(${spacers['spacer-1']});
    }
  }

  .btn__icon {
    vertical-align: middle;
    margin-left: ${spacers['spacer-6']};
    transition-timing-function: ${transitions.timingFunction};
    transition-duration: ${transitions.defaultDuration};

    ${(props) =>
      props.theme.svgColor
        ? 'fill:' + props.theme.svgColor
        : 'fill: currentColor'};
  }
`;
