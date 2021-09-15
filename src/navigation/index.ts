import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { ARIA_EXPANDED } from '../constants';
import { NavigationContoller } from './controller';

export interface NavigationProps {
  /**
   * Unique ID for the menu
   */
  id: string;
  /**
   * Label for menu, which will be presented to screen readers
   */
  menubarLabel?: string;
  /**
   *  Whether or not top item with submenu is link
   */
  isSubmenuLink?: boolean;
}

export interface NavigationReturnProps {
  itemProps: {
    role: 'none';
  };
  menuItemProps: (
    i: number,
    hasSubmenu?: boolean
  ) => {
    role: 'menuitem';
    tabIndex: number;
    'aria-haspopup'?: boolean;
    'aria-expanded'?: boolean;
  };
  menubarProps: {
    id: string;
    role: 'menubar';
    'aria-label': string;
    ref: (element: HTMLElement) => void;
  };
  submenuProps: (label: string) => {
    role: 'menu';
    'aria-label': string;
    style: { display: 'none' };
  };
}

export const useAriaNavigation = ({
  menubarLabel,
  id,
  isSubmenuLink,
}: NavigationProps): NavigationReturnProps => {
  const controller = useRef(new NavigationContoller(id, isSubmenuLink));
  const [isActive, setIsActive] = useState(false);

  const setActivity = () => {
    controller.current.setActivity(isActive, setIsActive);
  };

  useEffect(() => {
    document.addEventListener('focusin', setActivity);
    return () => {
      document.removeEventListener('focusin', setActivity);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      controller.current.onActive();
    } else {
      controller.current.onInactive();
    }
  }, [isActive]);

  const menubarProps = useMemo(
    () =>
      ({
        id,
        role: 'menubar',
        'aria-label': menubarLabel || 'Main menubar',
        ref: controller.current.setMenuRef,
      } as NavigationReturnProps['menubarProps']),
    [menubarLabel, id]
  );

  const submenuProps = useCallback(
    (label: string) =>
      ({
        role: 'menu',
        'aria-label': label,
        style: { display: 'none' },
      } as ReturnType<NavigationReturnProps['submenuProps']>),
    []
  );

  const menuItemProps = useCallback((i: number, hasSubmenu?: boolean) => {
    const focusedIndex = controller.current.getFocusedIndex();
    return {
      role: 'menuitem',
      tabIndex:
        focusedIndex === -1 && i === 0 ? 0 : focusedIndex === i ? 0 : -1,
      ...(hasSubmenu
        ? { 'aria-haspopup': hasSubmenu, [ARIA_EXPANDED]: false }
        : {}),
    } as ReturnType<NavigationReturnProps['menuItemProps']>;
  }, []);

  const itemProps = useMemo(
    () =>
      ({
        role: 'none',
      } as NavigationReturnProps['itemProps']),
    []
  );

  const props = useMemo(
    () => ({
      itemProps,
      menuItemProps,
      menubarProps,
      submenuProps,
    }),
    [itemProps, menuItemProps, menubarProps, submenuProps]
  );

  return props;
};
