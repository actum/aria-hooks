export class ToolTipController {
  private onDismiss: () => void;

  constructor(onDismiss: () => void) {
    this.onDismiss = onDismiss;
  }

  onOpen = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
  onClose = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.onDismiss();
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.onClose();
    }
  };
}
