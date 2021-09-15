import React from 'react';
import { useAriaNavigation, NavigationProps, NavigationReturnProps } from '.';

import { StyledMenu, StyledNav, StyledSubmenu } from './menubar.styles';

export const Menubar: React.FC = () => {
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
    <div style={{ height: 170 }}>
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
    </div>
  );
};

export const NavigationPropsComponent: React.FC<NavigationProps> = () => null;
export const NavigationReturnPropsItemProps: React.FC<
  NavigationReturnProps['itemProps']
> = () => null;
export const NavigationReturnPropsMenuItemProps: React.FC<
  ReturnType<NavigationReturnProps['menuItemProps']>
> = () => null;
export const NavigationReturnPropsMenubarProps: React.FC<
  NavigationReturnProps['menubarProps']
> = () => null;
export const NavigationReturnPropsSubmenuProps: React.FC<
  ReturnType<NavigationReturnProps['submenuProps']>
> = () => null;
