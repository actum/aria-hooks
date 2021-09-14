import { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { TabsController } from './controller';

export interface TabsProps {
  tablistLabel?: string;
  id?: string;
}

export const useAriaTabs = ({ tablistLabel, id }: TabsProps) => {
  const getId = (prefix: 'tab' | 'tabpanel', id: string) => `${prefix}_${id}`;

  const controller = useRef(new TabsController());

  const [isActive, setIsActive] = useState(false);

  const setActivity = () => {
    controller.current.setActivity(isActive, setIsActive);
  };

  useEffect(() => {
    document.addEventListener('focusin', setActivity);
    document.addEventListener('click', controller.current.handleMouseClick);
    return () => {
      document.removeEventListener('focusin', setActivity);
      document.removeEventListener(
        'click',
        controller.current.handleMouseClick
      );
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      controller.current.onActive();
    } else {
      controller.current.onInactive();
    }
  }, [isActive]);

  const tabsProps = useMemo(
    () => ({
      ref: controller.current.setTabListRef,
      id: id ? id : 'tabs',
    }),
    []
  );

  const tablistProps = useMemo(
    () => ({
      role: 'tablist',
      'aria-label': tablistLabel ? tablistLabel : '',
    }),
    []
  );

  const tabProps = useCallback((id: string, i: number) => {
    const focusedIndex = controller.current.getIndex();

    return {
      role: 'tab',
      'aria-selected': i === 0 ? true : false,
      'aria-controls': getId('tabpanel', id),
      id: getId('tab', id),
      tabIndex:
        focusedIndex === -1 && i === 0 ? 0 : focusedIndex === i ? 0 : -1,
    };
  }, []);

  const tabpanelProps = useCallback(
    (id: string, i: number) => ({
      role: 'tabpanel',
      'aria-labelledby': getId('tab', id),
      tabIndex: 0,
      id: getId('tabpanel', id),
      style: { display: i === 0 ? 'block' : 'none' },
    }),
    []
  );

  const props = useMemo(
    () => ({
      tabsProps,
      tablistProps,
      tabProps,
      tabpanelProps,
    }),
    [tabsProps, tablistProps, tabProps, tabpanelProps]
  );

  return props;
};
