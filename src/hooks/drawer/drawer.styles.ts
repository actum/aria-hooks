import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import { borders, fontSizes, spacers } from '../../styles/variables';

const drawerStyleVariables = {
  width: '40%',
  maxWidth: '500px',
  minWidth: '300px',
};

export const StyledDrawer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  width: ${drawerStyleVariables.width};
  max-width: ${drawerStyleVariables.maxWidth};
  min-width: ${drawerStyleVariables.minWidth};
  padding: ${spacers['spacer-5']};

  background: ${(props: { theme: colorTheme }) =>
    props.theme.primaryBackground};
  color: ${(props: { theme: colorTheme }) => props.theme.textColor};

  .wrapper {
    position: relative;

    width: 100%;
    height: 100%;
  }

  .sample_text {
    position: absolute;
    top: 50%;
    left: 50%;

    font-size: ${fontSizes.xxl};

    transform: translate(-50%, -50%);
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${spacers['spacer-2']};

  border-bottom: ${borders.lightBorder};

  .icon_btn {
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:focus {
      box-shadow: ${(props: { theme: colorTheme }) =>
        props.theme.isDarkTheme
          ? borders.focusOutlineDarkMode
          : borders.focusOutlineLightMode};
      outline: none;
    }

    svg {
      fill: ${(props: { theme: colorTheme }) => props.theme.textColor};
    }
  }
`;
