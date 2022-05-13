import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { ARIA_CONTROLS, ARIA_EXPANDED, ARIA_LABELLEDBY } from '../../constants';
import { AccordionController } from './controller';
import { AccordionProps, AccordionHookReturnProps } from './types';

export const useAriaAccordion = ({
  id,
}: AccordionProps): AccordionHookReturnProps => {
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
    (id: string, expandedByDefault: boolean = false) => ({
      [ARIA_EXPANDED]: expandedByDefault,
      [ARIA_CONTROLS]: getId('acc_panel', id),
      id: getId('acc_btn', id),
      ['data-class']: 'acc_btn',
    }),
    []
  );
  const panelProps = useCallback(
    (id: string, isOpenByDefault: boolean = false) => ({
      [ARIA_LABELLEDBY]: getId('acc_btn', id),
      id: getId('acc_panel', id),
      style: {
        display: isOpenByDefault ? ('block' as 'block') : ('none' as 'none'),
      },
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
