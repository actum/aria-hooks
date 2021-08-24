import { useRef, useMemo, useEffect } from 'react';
import { ToolTipController } from './controller';

export interface ToolTipProps {
  /**
   * Unique ID for the Tooltip
   */
  id: string;
  /**
   * Whether or not Tooltip is open
   */
  isOpen: boolean;
  /**
   * Callback for closing tooltip
   */
  onDismiss: () => void;
  /**
   * Callback for opening tooltip
   */
  onRelease: () => void;
}

export const useAriaToolTip = ({
  id,
  isOpen,
  onRelease,
  onDismiss,
}: ToolTipProps) => {
  const getBtnId = (id: string) => {
    return `${id}_btn`;
  };

  const controller = useRef(
    new ToolTipController(getBtnId(id), onDismiss, onRelease)
  );

  useEffect(() => {
    if (isOpen) {
      controller.current.onOpen();
    } else {
      controller.current.onClose();
    }
  }, [isOpen]);

  useEffect(() => {
    controller.current.registerEvents();
  }, []);

  const buttonProps = useMemo(
    () => ({
      id: getBtnId(id),
      ref: controller.current.setBtnRef,
      role: 'button',
      tabIndex: 0,
      'aria-expanded': isOpen,
      'aria-describedby': id,
    }),
    [isOpen]
  );

  const toolTipProps = useMemo(
    () => ({
      id: id,
      role: 'tooltip',
    }),
    [isOpen]
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
