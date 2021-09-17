import { useCallback, useMemo, useRef, useEffect } from 'react';
import { NavigationContoller } from './controller';

export interface AccordionProps {
  id: string;
}

export const useAriaNavigation = ({ id }: AccordionProps) => {
  const getId = (prefix: 'acc_btn' | 'acc_panel', id: string) =>
    `${prefix}_${id}`;

  const controller = useRef(new NavigationContoller(id));

  useEffect(() => {
    window.addEventListener('keydown', controller.current.handleKeyDown);
    window.addEventListener('click', controller.current.handleVisibilityChange);
  }, []);

  const accordionProps = useMemo(
    () => ({
      id,
      ref: controller.current.setAccRef,
    }),
    []
  );
  const buttonProps = useCallback((id: string, expanded: boolean = false) => {
    // controller.current.setInitialVisibility(getId('acc_panel', id), expanded);

    return {
      'aria-expanded': expanded,
      'aria-controls': getId('acc_panel', id),
      id: getId('acc_btn', id),
      className: 'acc_btn',
    };
  }, []);
  const panelProps = useCallback(
    (id: string, isOpen: boolean) => ({
      'aria-labelledby': getId('acc_btn', id),
      id: getId('acc_panel', id),
      style: { display: isOpen ? 'block' : 'none' },
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
