import styled from 'styled-components';
import { colorTheme } from '../../styles/themes';
import { borders, colors, spacers } from '../../styles/variables';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  [tabindex='0'] {
    color: ${colors.red};
  }

  .dropdown__icon {
    vertical-align: middle;
    transform: rotate(90deg);
  }
`;

export const StyledMenu = styled.ul`
  position: relative;
  display: flex;
  padding: ${spacers['spacer-4']} 0;
  margin: 0;
  list-style-type: none;

  li {
    padding: ${spacers['spacer-2']};
  }

  [role='menuitem'] {
    padding: ${spacers['spacer-1']};
    color: ${(props: { theme: colorTheme }) => props.theme.textColor};
    text-decoration: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0;

    &:focus {
      box-shadow: ${(props: { theme: colorTheme }) =>
        props.theme.isDarkTheme
          ? borders.focusOutlineDarkMode
          : borders.focusOutlineLightMode};
    }

    &:hover {
      color: ${colors.red};
    }
  }
`;

export const StyledSubmenu = styled(StyledMenu)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  border-top: ${borders.lightBorder};
  border-bottom: ${borders.lightBorder};
`;
