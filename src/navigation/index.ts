import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { NavigationContoller } from './controller';

interface NavigationProps {
  menubarLabel?: string;
  id: string;
}

export const useAriaNavigation = ({ menubarLabel, id }: NavigationProps) => {
  const controller = useRef(new NavigationContoller(id));
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
    () => ({
      id,
      role: 'menubar',
      'aria-label': menubarLabel || 'Main menubar',
      ref: controller.current.setMenuRef,
    }),
    [menubarLabel, id]
  );

  const menuItemProps = useCallback((i) => {
    const focusedIndex = controller.current.getFocusedIndex();
    return {
      role: 'menuitem',
      tabIndex:
        focusedIndex === -1 && i === 0 ? 0 : focusedIndex === i ? 0 : -1,
    };
  }, []);

  const itemProps = useMemo(
    () => ({
      role: 'none',
    }),
    []
  );

  const props = useMemo(
    () => ({
      itemProps,
      menuItemProps,
      menubarProps,
    }),
    [itemProps, menuItemProps, menubarProps]
  );

  return props;
};
