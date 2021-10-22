import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { ARIA_EXPANDED } from '../../constants';
import { NavigationContoller } from './controller';
import { NavigationProps, NavigationReturnProps } from './types';

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
    controller.current.regiterMouseListeners();
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
        style: { padding: '0' },
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
