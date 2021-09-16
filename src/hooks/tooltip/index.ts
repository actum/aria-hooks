import { useRef, useMemo, useEffect, useState, CSSProperties } from 'react';
import { ARIA_DESCRIBEDBY, ARIA_EXPANDED } from '../constants';
import { ToolTipController } from './controller';
import { ToolTipProps } from './types';

export const useAriaToolTip = ({
  id,
  onRelease,
  onDismiss,
  isShowing,
}: ToolTipProps) => {
  const controller = useRef(new ToolTipController(id, onRelease, onDismiss));

  useEffect(() => {
    controller.current.registerEvents();
  }, []);

  const buttonProps = useMemo(
    () => ({
      id: controller.current.getBtnId(),
      ref: controller.current.setBtnRef,
      role: 'button',
      tabIndex: 0,
      [ARIA_EXPANDED]: isShowing ? true : false,
      [ARIA_DESCRIBEDBY]: controller.current.getTooltipId(),
    }),
    [id]
  );

  const toolTipProps = useMemo(
    () => ({
      id: controller.current.getTooltipId(),
      ref: controller.current.setTooltipRef,
      role: 'tooltip',
      style: { visibility: isShowing ? 'visible' : 'hidden' } as CSSProperties,
    }),
    [id]
  );

  const props = useMemo(
    () => ({
      buttonProps,
      toolTipProps,
    }),
    [buttonProps, toolTipProps]
  );

  return props;
};
