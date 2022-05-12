export class AccordionController {
  private accordionRef: HTMLElement;
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  setActivity = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const accordion = this.accordionRef || document.querySelector(this.id);
    const items = Array.from(
      accordion.querySelectorAll('[data-class="acc_btn"]')
    ) as HTMLElement[];

    if (
      items.includes(document.activeElement as HTMLAnchorElement) &&
      !isActive
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  onActive = () => {
    window.addEventListener('keydown', this.handleKeyPress as any);
  };

  onInactive = () => {
    window.removeEventListener('keydown', this.handleKeyPress as any);
  };

  setAccRef = (accordion: HTMLElement) => {
    this.accordionRef = accordion;
  };

  getFocusedIndex = () => {
    if (!this.accordionRef) return -1;

    const items = Array.from(
      this.accordionRef.querySelectorAll('[data-class="acc_btn"]')
    ) as HTMLElement[];

    return items
      ? items.findIndex((item) => item.isSameNode(document.activeElement))
      : -1;
  };

  changeFocusToItem = (item?: 'next' | 'prev' | 'first' | 'last') => {
    const accordion = this.accordionRef || document.querySelector(this.id);
    const items = Array.from(
      accordion.querySelectorAll('[data-class="acc_btn"]')
    ) as HTMLElement[];

    let index = this.getFocusedIndex();

    if (item === 'last') {
      index = items.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else if (item === 'prev') {
      index = index <= 0 ? items.length - 1 : index - 1;
    }

    items[index]?.focus();
  };

  handleVisibilityChange = (e: MouseEvent) => {
    const accordion = this.accordionRef || document.querySelector(this.id);
    const accBtn = e.target as HTMLElement;
    const accBtns = Array.from(
      accordion.querySelectorAll('[data-class="acc_btn"]')
    ) as HTMLElement[];

    if (accBtns.includes(accBtn)) {
      const accPanel = document.getElementById(
        accBtn.getAttribute('aria-controls')
      ) as HTMLElement;
      const isVisible = accPanel.style.display === 'none' ? false : true;

      if (!isVisible) {
        accPanel.style.display = 'block';
        accBtn.setAttribute('aria-expanded', 'true');
      } else {
        accPanel.style.display = 'none';
        accBtn.setAttribute('aria-expanded', 'false');
      }
    }
  };

  handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        this.changeFocusToItem('next');
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        this.changeFocusToItem('prev');
        break;
      }
      case 'Home': {
        e.preventDefault();
        this.changeFocusToItem('first');
        break;
      }
      case 'End': {
        e.preventDefault();
        this.changeFocusToItem('last');
        break;
      }
      default: {
        break;
      }
    }
  };
}
