import { CSSProperties } from 'react';
import { ARIA_DESCRIBEDBY, ARIA_EXPANDED } from '../../constants';

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

export interface TooltipButtonProps {
  id: string;
  ref: (element: HTMLElement) => void;
  role: 'button';
  tabIndex: 0;
  [ARIA_EXPANDED]: boolean;
  [ARIA_DESCRIBEDBY]: string;
}

export interface TooltipTipProps {
  id: string;
  ref: (element: HTMLElement) => void;
  role: 'tooltip';
  style: CSSProperties;
}
