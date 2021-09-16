import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  [tabindex='0'] {
    color: ${(props) => props.theme['red']};
  }

  svg {
    vertical-align: middle;
    transform: rotate(90deg);
  }
`;

export const StyledMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding-block: 1rem;
  position: relative;

  li {
    padding: 10px;
  }
  a,
  span {
    padding: 5px;
    text-decoration: none;
    color: #2e2d2c;
  }
`;

export const StyledSubmenu = styled(StyledMenu)`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;
