import { useEffect, useMemo, useRef } from 'react';
import { ARIA_HIDDEN } from '../constants';
import { ModalController } from './controller';

export interface ModalProps {
  /**
   * Whether or not modal is open
   */
  isOpen: boolean;
  /**
   * Modal ID
   */
  id?: string;
  /**
   * Dialog's label
   */
  dialogLabel?: string;
  /**
   * Description of the content
   */
  description?: string;
  /**
   * Close modal label
   */
  closeLabel?: string;
  /**
   * Callback for closing
   */
  onDismiss: () => void;
}

const getDescriptionId = (id: string) => `${id}__description`;

export const useAriaModal = ({
  isOpen,
  onDismiss,
  dialogLabel,
  closeLabel,
  id,
  description,
}: ModalProps) => {
  const controller = useRef(new ModalController(onDismiss, id));

  useEffect(() => {
    if (isOpen) {
      controller.current.onOpen();
    } else {
      controller.current.onClose();
    }
  }, [isOpen]);

  const modalProps = useMemo(
    () => ({
      'aria-modal': true,
      role: 'dialog',
      'aria-label': dialogLabel,
      [ARIA_HIDDEN]: !isOpen,
      ARIA_DESCRIBEDBY: getDescriptionId(id),
      id,
      ref: controller.current.setModalRef,
      tabIndex: -1,
    }),
    [isOpen, id, dialogLabel]
  );

  const closeButtonProps = useMemo(
    () => ({
      'aria-label': closeLabel || 'Close modal',
      onClick: () => controller.current.onClose(),
    }),
    [closeLabel]
  );

  const descriptionSpanProps = useMemo(
    () => ({
      id: getDescriptionId(id),
    }),
    [id]
  );

  const props = useMemo(
    () => ({
      modalProps,
      closeButtonProps,
      descriptionSpanProps,
    }),
    [modalProps, closeButtonProps, descriptionSpanProps]
  );

  return props;
};
