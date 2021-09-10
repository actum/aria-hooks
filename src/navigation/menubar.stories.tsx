import React from 'react';
import { useAriaNavigation, NavigationProps } from '.';
import styled from 'styled-components';

const StyledNav = styled.nav`
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

const StyledMenu = styled.ul`
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

const StyledSubmenu = styled(StyledMenu)`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;

export const Menubar: React.FC<NavigationProps> = () => {
  const items = [
    { title: 'Home' },
    {
      title: 'Contact',
      items: [{ title: 'Submenu Item 1' }, { title: 'Submenu Item 2' }],
    },
    {
      title: 'About',
      items: [{ title: 'Submenu Item 1' }, { title: 'Submenu Item 2' }],
    },
  ];

  const { menubarProps, menuItemProps, itemProps, submenuProps } =
    useAriaNavigation({
      menubarLabel: 'Main navigation menu',
      id: 'navigation',
    });

  return (
    <StyledNav>
      <StyledMenu {...menubarProps}>
        {items.map((item, idx) => (
          <li key={item.title} {...itemProps}>
            {item.items ? (
              <>
                <span {...menuItemProps(idx, true)}>
                  {item.title}
                  <svg
                    width="19px"
                    height="19px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon btn__icon"
                  >
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </span>
              </>
            ) : (
              <a href="#" {...menuItemProps(idx, false)}>
                {item.title}
              </a>
            )}
            {item.items && (
              <StyledSubmenu {...submenuProps('submenu')} className="submenu">
                {item.items.map((childItem) => (
                  <li key={childItem.title} {...itemProps}>
                    <a href="#" {...menuItemProps(-1)}>
                      {childItem.title}
                    </a>
                  </li>
                ))}
              </StyledSubmenu>
            )}
          </li>
        ))}
      </StyledMenu>
    </StyledNav>
  );
};

export default {
  title: 'Aria Component/Menubar',
  component: Menubar,
};
