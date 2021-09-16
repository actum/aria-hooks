import { FocusTrapFactory } from '../../utils/focusTrapFactory';

export class ModalController {
  private focusTrap: FocusTrapFactory;
  private modalRef: HTMLDivElement;
  private isOpen: boolean;
  private onDismiss: () => void;
  private id: string;

  constructor(onDismiss: () => void, id?: string) {
    this.onDismiss = onDismiss;
    this.id = id;
  }

  setModalRef = (modal: HTMLDivElement) => (this.modalRef = modal);

  onOpen = () => {
    if (this.isOpen) {
      return;
    }

    const modal = this.modalRef || document.getElementById(this.id);

    if (modal) {
      this.focusTrap = new FocusTrapFactory(this.modalRef);
      this.focusTrap.mount();
    }

    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('touchstart', this.handleClick);
    window.addEventListener('mousedown', this.handleClick);

    this.isOpen = true;
  };

  onClose = () => {
    if (!this.isOpen) {
      return;
    }

    this.focusTrap?.destroy();

    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('touchstart', this.handleClick);
    window.removeEventListener('mousedown', this.handleClick);

    this.onDismiss?.();

    this.isOpen = false;
  };

  handleKeyPress = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      this.onClose();
    }
  };

  handleClick = (e: MouseEvent) => {
    if (!this.modalRef.contains(e.target as HTMLElement)) {
      this.onClose();
    }
  };
}
