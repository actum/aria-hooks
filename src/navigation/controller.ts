export class NavigationContoller {
  private menuRef: HTMLElement;
  private id: string;

  constructor(id?: string) {
    this.id = id;
  }

  setMenuRef = (menu: HTMLElement) => {
    this.menuRef = menu || document.getElementById(this.id);
  };

  setActivity = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const items = Array.from(
      this.menuRef.querySelectorAll('a')
    ) as HTMLAnchorElement[];

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
    window.addEventListener('keydown', this.handleKeyPress);
  };

  onInactive = () => {
    window.removeEventListener('keydown', this.handleKeyPress);
  };

  getFocusedIndex = () => {
    if (this.menuRef === undefined) return -1;
    const items = Array.from(
      this.menuRef.querySelectorAll('li>a')
    ) as HTMLAnchorElement[];

    return items
      ? items.findIndex((item) => item.isSameNode(document.activeElement))
      : -1;
  };

  changeFocusToItem = (item: 'next' | 'prev' | 'first' | 'last') => {
    let index = this.getFocusedIndex();

    const items = Array.from(
      this.menuRef.querySelectorAll('li>a')
    ) as HTMLAnchorElement[];

    if (item === 'last') {
      index = items.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else {
      index = index === 0 ? items.length - 1 : index - 1;
    }

    items.forEach((item, i) => {
      item.tabIndex = index === i ? 0 : -1;
    });

    items[index]?.focus();
  };

  handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight': {
        this.changeFocusToItem('next');
        break;
      }
      case 'ArrowLeft': {
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
      default:
        break;
    }
  };
}
