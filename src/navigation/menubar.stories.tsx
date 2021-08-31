import React from 'react';
import { useAriaNavigation, NavigationProps } from '.';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  [role='menubar'] {
    display: flex;
    & > li {
      padding: 10px;
      position: relative;
      ul {
        padding: 2px;
        border: 1px solid black;
        position: absolute;
        left: 0;
        top: 100%;
      }
      *[aria-haspopup='true']::after {
        content: '>';
        padding-left: 5px;
        background: transparent;
      }
    }
  }
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
      <ul {...menubarProps}>
        {items.map((item, idx) => (
          <li key={item.title} {...itemProps}>
            {item.items ? (
              <span {...menuItemProps(idx, true)}>{item.title}</span>
            ) : (
              <a href="#" {...menuItemProps(idx, false)}>
                {item.title}
              </a>
            )}

            {/* <a href="#" {...menuItemProps(idx, item.items ? true : false)}>
              {item.title}
            </a> */}
            {item.items && (
              <ul {...submenuProps('submenu')}>
                {item.items.map((childItem) => (
                  <li key={childItem.title} {...itemProps}>
                    <a href="#" {...menuItemProps(-1)}>
                      {childItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default {
  title: 'Aria Component/Menubar',
  component: Menubar,
};
