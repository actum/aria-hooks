import { useRef, useMemo, useEffect, useState, CSSProperties } from 'react';
import { ToolTipController } from './controller';

export interface ToolTipProps {
  /**
   * Unique ID for the Tooltip
   */
  id: string;
  /**
   * Callback for closing tooltip
   */
  onDismiss?: () => void;
  /**
   * Whether or not Tooltip is visible
   */
  isShowing?: boolean;
  /**
   * Callback for opening tooltip
   */
  onRelease?: () => void;
}

export const useAriaToolTip = ({
  id,
  onRelease,
  onDismiss,
  isShowing,
}: ToolTipProps) => {
  const getBtnId = (id: string) => (id ? `${id}_btn` : undefined);

  const controller = useRef(
    new ToolTipController(getBtnId(id), onRelease, onDismiss)
  );

  useEffect(() => {
    controller.current.registerEvents();
  }, []);

  const buttonProps = useMemo(
    () => ({
      id: getBtnId(id),
      ref: controller.current.setBtnRef,
      role: 'button',
      tabIndex: 0,
      'aria-expanded': isShowing ? true : false,
      'aria-describedby': id,
    }),
    [id]
  );

  const toolTipProps = useMemo(
    () => ({
      id: id,
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
