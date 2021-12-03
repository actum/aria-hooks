import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import { borders, fontSizes, spacers } from '../../styles/variables';

const modalStyleVariables = {
  width: '500px',
  height: '500px',
  maxWidth: '70vw',
  maxHeight: '70vh',
};

export const StyledModal = styled.div`
  position: relative;

  width: ${modalStyleVariables.width};
  height: ${modalStyleVariables.height};
  max-height: ${modalStyleVariables.maxHeight};
  max-width: ${modalStyleVariables.maxWidth};
  padding: ${spacers['spacer-5']};

  background: ${(props: { theme: colorTheme }) =>
    props.theme.primaryBackground};
  color: ${(props: { theme: colorTheme }) => props.theme.textColor};

  .sample_text {
    position: absolute;
    top: 50%;
    left: 50%;

    font-size: ${fontSizes.xxl};
    transform: translate(-50%, -50%);
  }
`;

export const ModalPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${spacers['spacer-2']};

  border-bottom: ${borders.lightBorder};

  .modal__close-btn {
    background-color: transparent;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
      box-shadow: ${(props: { theme: colorTheme }) =>
        props.theme.isDarkTheme
          ? borders.focusOutlineDarkMode
          : borders.focusOutlineLightMode};
    }

    svg {
      fill: ${(props: { theme: colorTheme }) => props.theme.textColor};
    }
  }
`;
