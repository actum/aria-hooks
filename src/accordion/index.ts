import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { AccordionController } from './controller';

export interface AccordionProps {
  id: string;
}

export const useAriaNavigation = ({ id }: AccordionProps) => {
  const getId = (prefix: 'acc_btn' | 'acc_panel', id: string) =>
    `${prefix}_${id}`;

  const controller = useRef(new AccordionController(id));

  const [isActive, setIsActive] = useState(false);

  const setActivity = () => {
    controller.current.setActivity(isActive, setIsActive);
  };

  useEffect(() => {
    window.addEventListener('focusin', setActivity);
    window.addEventListener('click', controller.current.handleVisibilityChange);
    return () => {
      window.removeEventListener('focusin', setActivity);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      controller.current.onActive();
    } else {
      controller.current.onInactive();
    }
  }, [isActive]);

  const accordionProps = useMemo(
    () => ({
      id,
      ref: controller.current.setAccRef,
    }),
    []
  );
  const buttonProps = useCallback(
    (id: string, expanded: boolean = false) => ({
      'aria-expanded': expanded,
      'aria-controls': getId('acc_panel', id),
      id: getId('acc_btn', id),
      className: 'acc_btn',
    }),
    []
  );
  const panelProps = useCallback(
    (id: string, isOpen: boolean) => ({
      'aria-labelledby': getId('acc_btn', id),
      id: getId('acc_panel', id),
      style: { display: isOpen ? 'block' : 'none' },
      className: 'acc_panel',
    }),
    []
  );
  const props = useMemo(
    () => ({
      accordionProps,
      panelProps,
      buttonProps,
    }),
    [accordionProps, panelProps, buttonProps]
  );

  return props;
};
