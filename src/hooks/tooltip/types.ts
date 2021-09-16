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
