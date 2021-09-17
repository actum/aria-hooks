export class NavigationContoller {
  private accordionRef: HTMLElement;
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  setAccRef = (accordion: HTMLElement) => {
    this.accordionRef = accordion;
  };

  getFocusedIndex = () => {
    if (this.accordionRef === undefined) return -1;

    const items = Array.from(
      this.accordionRef.querySelectorAll('.acc_btn')
    ) as HTMLElement[];

    return items
      ? items.findIndex((item) => item.isSameNode(document.activeElement))
      : -1;
  };

  changeFocusToItem = (item?: 'next' | 'prev' | 'first' | 'last') => {
    const items = Array.from(
      this.accordionRef.querySelectorAll('.acc_btn')
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
    const accBtn = e.target as HTMLElement;
    const accBtns = Array.from(
      this.accordionRef.querySelectorAll('.acc_btn')
    ) as HTMLElement[];

    if (accBtns.includes(accBtn)) {
      const accPanel = document.querySelector(
        `#${accBtn.getAttribute('aria-controls')}`
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

  handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': {
        this.changeFocusToItem('next');
        break;
      }
      case 'ArrowUp': {
        this.changeFocusToItem('prev');
        break;
      }
      case 'Home': {
        this.changeFocusToItem('first');
        break;
      }
      case 'End': {
        this.changeFocusToItem('last');
        break;
      }
      default: {
        break;
      }
    }
  };
}
