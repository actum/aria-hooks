import { dir } from 'console';

export class ToolTipController {
  private btnId: string;
  private buttonRef: HTMLButtonElement;
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

  onOpen = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
  onClose = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.onDismiss();
  };

  registerEvents = () => {
    const button = this.buttonRef || document.getElementById(this.btnId);

    button.addEventListener('focus', this.handleFocus);
    button.addEventListener('blur', this.handleBlur);
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.onClose();
    }
  };

  handleFocus = () => {
    this.onRelease();
  };

  handleBlur = () => {
    this.onDismiss();
  };
}
