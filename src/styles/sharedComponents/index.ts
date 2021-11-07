import styled from 'styled-components';

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
  background: #0007;
  z-index: 1000;

  &[aria-hidden='true'] {
    display: none;
  }
`;

export const Btn = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-radius: 30px;
  padding: 11px 15px 11px 30px;
  font-weight: bold;
  outline: 0;
  border: 1px solid transparent;
  display: inline-block;
  text-decoration: none;
  transition-property: color, border, background-color, box-shadow;
  transition-timing-function: cubic-bezier(.39,.575,.565,1);
  transition-duration: .2s;
  // TODO make the props to work
  // transition-timing-function: ${(props) => props.theme['transition-timing-function']};
  // transition-duration: ${(props) => props.theme['transition-duration-default']};

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: none;

    .btn__icon {
      transform: translateX(4px);
    }
  }

  .btn__icon {
    vertical-align: middle;
    margin-left: 25px;
    transition: transform 0.2s
      ${(props) => props.theme['transition-timing-function']};
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  &:focus {
    box-shadow: 0 0 0 0.15rem ${(props) => props.theme['blue']};
    outline: none;
  }
`;

export const UniqueBtn = styled(Btn)`
  background-color: ${(props) => props.theme['unique']};
  color: ${(props) => props.theme['white']};

  svg {
    fill: ${(props) => props.theme['white']};
  }

  &:hover {
    color: ${(props) => props.theme['white']};
  }
`;

export const PrimaryBtn = styled(Btn)`
  color: #fff;
  background-color: #2e2d2c;
  // TODO make the props to work
  // color: ${(props) => props.theme['white']};
  // background-color: ${(props) => props.theme['black']};

  svg {
    fill: #fff;
    // TODO make the props to work
    // fill: ${(props) => props.theme['white']};
  }

  &:hover {
    color: #fff;
    background-color: #d93c31;
    // TODO make the props to work
    // background-color: ${(props) => props.theme['unique']};
    // color: ${(props) => props.theme['white']};
  }
`;

export const SecondaryBtn = styled(Btn)`
  border: 1px solid ${(props) => props.theme['primary']};
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['primary']};

  svg {
    fill: ${(props) => props.theme['unique']};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['unique']};
  }

  &:focus {
    border-color: ${(props) => props.theme['primary']};
  }
`;

export const BtnIcon = styled.svg`
  padding: 0;
  border-radius: 0;
  border: none;

  svg {
    margin-left: 0;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme['gray']};

    svg {
      fill: ${(props) => props.theme['unique']};
    }
  }
`;
