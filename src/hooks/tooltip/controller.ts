import { ARIA_EXPANDED } from '../../constants';

export class ToolTipController {
  private id: string;
  private buttonRef: HTMLButtonElement;
  private tooltipRef: HTMLElement;
  private onDismiss: () => void;
  private onRelease: () => void;

  constructor(id: string, onDismiss?: () => void, onRelease?: () => void) {
    this.id = id;
    this.onDismiss = onDismiss;
    this.onRelease = onRelease;
  }

  getBtnId = () => `${this.id}_button`;

  getTooltipId = () => `${this.id}_tooltip`;

  setBtnRef = (buttonRef: HTMLButtonElement) => {
    this.buttonRef = buttonRef;
  };

  setTooltipRef = (tooltipRef: HTMLElement) => {
    this.tooltipRef = tooltipRef;
  };

  registerEvents = () => {
    const button = this.buttonRef || document.getElementById(this.getBtnId());

    button.addEventListener('focus', this.onOpen);
    button.addEventListener('blur', this.onClose);
    button.addEventListener('mouseenter', this.onOpen);
    button.addEventListener('mouseleave', this.onClose);
  };

  onOpen = () => {
    const button = this.buttonRef || document.getElementById(this.getBtnId());
    const tooltip =
      this.tooltipRef || document.getElementById(this.getTooltipId());

    button.setAttribute(ARIA_EXPANDED, 'true');
    tooltip.style.visibility = 'visible';

    window.addEventListener('keydown', this.handleKeyDown);
    this.onRelease?.();
  };
  onClose = () => {
    const button = this.buttonRef || document.getElementById(this.getBtnId());
    const tooltip =
      this.tooltipRef || document.getElementById(this.getTooltipId());

    button.setAttribute(ARIA_EXPANDED, 'false');
    tooltip.style.visibility = 'hidden';

    window.removeEventListener('keydown', this.handleKeyDown);
    this.onDismiss?.();
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.onClose();
    }
  };
}
