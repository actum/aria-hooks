import { FocusTrapFactory } from '../../utils/focusTrapFactory';

export class DrawerController {
  id: string;
  contentElement: HTMLDivElement;
  wrapperElement: HTMLDivElement;
  focusTrap: FocusTrapFactory;
  isOpen: boolean;
  handleClose: () => void;

  constructor(handleClose) {
    this.handleClose = handleClose;
  }

  setContentRef = (content: HTMLDivElement) => (this.contentElement = content);
  setWrapperRef = (content: HTMLDivElement) => {
    this.wrapperElement = content;
    this.focusTrap = new FocusTrapFactory(content);
  };

  onOpen = () => {
    if (this.isOpen) {
      return;
    }

    this.focusTrap.mount();

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('touchstart', this.handleClick);
    window.addEventListener('mousedown', this.handleClick);

    this.isOpen = true;
  };

  onClose = () => {
    if (!this.isOpen) {
      return;
    }

    this.focusTrap.destroy();

    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('touchstart', this.handleClick);
    window.removeEventListener('mousedown', this.handleClick);

    this.isOpen = false;

    this.handleClose?.();
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.onClose();
    }
  };

  handleClick = (e: MouseEvent) => {
    if (!this.contentElement?.contains(e.target as HTMLElement)) {
      this.onClose();
    }
  };
}
