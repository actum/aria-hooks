import { useEffect, useMemo, useRef } from 'react';
import { DrawerController } from './controller';

export interface DrawerProps {
  /**
   * Unique identifier to the drawer instance
   */
  id: string;
  /**
   * Used for controlled approach of toggling drawer on and off.
   */
  isOpen: boolean;
  /**
   * Callback for when drawer closes internally
   */
  onDismiss: () => void;
  /**
   * Close drawer aria label
   *
   * @default 'Close drawer'
   */
  closeLabel?: string;
}

export const useAriaDrawer = ({
  onDismiss,
  isOpen,
  closeLabel,
}: DrawerProps) => {
  const controller = useRef(new DrawerController(onDismiss));

  useEffect(() => {
    if (isOpen) {
      controller.current.onOpen();
    } else {
      controller.current.onClose();
    }
  }, [isOpen]);

  const drawerProps = useMemo(
    () => ({
      'aria-hidden': !isOpen,
      ref: controller.current.setWrapperRef,
    }),
    [isOpen]
  );

  const contentProps = useMemo(
    () => ({
      ref: controller.current.setContentRef,
    }),
    []
  );

  const closeButtonProps = useMemo(
    () => ({
      'aria-label': closeLabel || 'Close drawer',
      onClick: () => controller.current.onClose(),
    }),
    [closeLabel]
  );

  const props = useMemo(
    () => ({
      drawerProps,
      contentProps,
      closeButtonProps,
    }),
    [drawerProps, contentProps, closeButtonProps]
  );

  return props;
};
