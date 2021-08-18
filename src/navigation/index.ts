import { useRef, useMemo, useEffect, useState } from 'react';
import { NavigationContoller } from './controller';

interface NavigationProps {
  menubarLabel?: string;
  id?: string;
  menuItemsLength: number;
}

export const useAriaNavigation = ({
  menubarLabel,
  id,
  menuItemsLength,
}: NavigationProps) => {
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

  const menuItemProps = useMemo(() => {
    let props = [];

    for (let i = 0; i < menuItemsLength; i++) {
      if (i === 0) {
        props.push({
          role: 'menuitem',
          tabIndex: 0,
        });
      } else {
        props.push({
          role: 'menuitem',
          tabIndex: -1,
        });
      }
    }
    return props;
  }, [menuItemsLength]);

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
