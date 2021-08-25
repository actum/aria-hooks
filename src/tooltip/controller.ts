export class ToolTipController {
  private btnId: string;
  private buttonRef: HTMLButtonElement;
  private tooltipRef: HTMLElement;
  private onDismiss: () => void;
  private onRelease: () => void;

  constructor(btnId: string, onDismiss: () => void, onRelease: () => void) {
    this.btnId = btnId;
    this.onDismiss = onDismiss;
    this.onRelease = onRelease;
  }

  setBtnRef = (buttonRef: HTMLButtonElement) => {
    this.buttonRef = buttonRef;
  };

  setTooltipRef = (tooltipRef: HTMLElement) => {
    this.tooltipRef = tooltipRef;
  };

  registerEvents = () => {
    const button = this.buttonRef || document.getElementById(this.btnId);

    button.addEventListener('focus', this.onOpen);
    button.addEventListener('blur', this.onClose);
    button.addEventListener('mouseenter', this.onOpen);
    button.addEventListener('mouseleave', this.onClose);
  };

  onOpen = () => {
    const button = this.buttonRef || document.getElementById(this.btnId);
    const tooltip =
      this.tooltipRef || document.querySelector('[role="tooltip"]');

    button.setAttribute('aria-expanded', 'true');
    tooltip.style.visibility = 'visible';

    window.addEventListener('keydown', this.handleKeyDown);
    this.onRelease?.();
  };
  onClose = () => {
    const button = this.buttonRef || document.getElementById(this.btnId);
    const tooltip =
      this.tooltipRef || document.querySelector('[role="tooltip"]');

    button.setAttribute('aria-expanded', 'false');
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
