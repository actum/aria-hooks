import { useRef, useMemo, useEffect } from 'react';
import { ToolTipController } from './controller';

export interface ToolTipProps {
  /**
   * Unique ID for the Tooltip
   */
  id?: string;
  /**
   * Whether or not Tooltip is open
   */
  isShowing?: boolean;
  /**
   * Callback for closing tooltip
   */
  onDismiss?: () => void;
  /**
   * Callback for opening tooltip
   */
  onRelease?: () => void;
}

export const useAriaToolTip = ({
  id,
  isShowing,
  onRelease,
  onDismiss,
}: ToolTipProps) => {
  const getBtnId = (id: string) => (id ? `${id}_btn` : undefined);
  const tooltipId = id ? id : 'tooltip';

  const controller =
    id !== undefined && onDismiss !== undefined && onRelease !== undefined
      ? useRef(new ToolTipController(getBtnId(id), onDismiss, onRelease))
      : undefined;

  useEffect(() => {
    if (isShowing) {
      controller?.current.onOpen();
    } else {
      controller?.current.onClose();
    }
  }, [isShowing]);

  useEffect(() => {
    controller?.current.registerEvents();
  }, []);

  const buttonProps = useMemo(
    () => ({
      id: getBtnId(id),
      ref: controller?.current.setBtnRef,
      role: 'button',
      tabIndex: 0,
      'aria-expanded': isShowing,
      'aria-describedby': tooltipId,
    }),
    [isShowing, id]
  );

  const toolTipProps = useMemo(
    () => ({
      id: tooltipId,
      role: 'tooltip',
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
