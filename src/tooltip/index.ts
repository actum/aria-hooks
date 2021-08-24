import { useRef, useMemo, useEffect } from 'react';
import { ToolTipController } from './controller';

export interface ToolTipProps {
  id: string;
  isOpen: boolean;
  onDismiss: () => void;
}

export const useAriaToolTip = ({ id, isOpen, onDismiss }: ToolTipProps) => {
  const controller = useRef(new ToolTipController(onDismiss));

  useEffect(() => {
    if (isOpen) {
      controller.current.onOpen();
    } else {
      controller.current.onClose();
    }
  }, [isOpen]);

  const buttonProps = useMemo(
    () => ({
      role: 'button',
      tabIndex: 0,
      'aria-describedby': id,
    }),
    []
  );

  const toolTipProps = useMemo(
    () => ({
      id: id,
      role: 'tooltip',
    }),
    []
  );

  const props = useMemo(
    () => ({
      buttonProps,
      toolTipProps,
    }),
    []
  );

  return props;
};
