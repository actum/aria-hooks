import * as React from 'react';

export interface ModalProps {
  /**
   * Whether or not modal is open
   */
  isOpen?: boolean;
  /**
   * Modal ID
   */
  id: string;
  /**
   * Dialog's label
   */
  dialogLabel?: string;
  /**
   * Close modal label
   */
  closeLabel?: string;
  /**
   * Callback for closing
   */
  onDismiss: () => void;
}

export interface ModalReturnProps {
  modalProps: {
    'aria-modal': true;
    role: 'dialog';
    'aria-label': string;
    'aria-hidden': boolean;
    'aria-describedby': string;
    id: string;
    ref: (element: HTMLDivElement) => void;
    tabIndex: -1;
  };
  closeButtonProps: {
    'aria-label': string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
  descriptionSpanProps: {
    id: string;
  };
}
