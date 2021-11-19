import styled from 'styled-components';
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
    color: ${colors.black};
    text-decoration: none;
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: ${borders.focusOutline};
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
