import React from 'react';

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

export interface DrawerReturnProps {
  drawerProps: {
    'aria-hidden': boolean;
    ref: (element: HTMLDivElement) => void;
  };
  contentProps: {
    ref: (element: HTMLDivElement) => void;
  };
  closeButtonProps: {
    'aria-label': string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
}
