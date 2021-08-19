export class NavigationContoller {
  private menuRef: HTMLElement;
  private index = 0;
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

  handleKeyPress = (e: KeyboardEvent) => {
    const items = Array.from(
      this.menuRef.querySelectorAll('li>a')
    ) as HTMLAnchorElement[];

    switch (e.key) {
      case 'ArrowRight': {
        items[this.index].tabIndex = -1;
        if (this.index === items.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        items[this.index].tabIndex = 0;
        items[this.index].focus();
        break;
      }
      case 'ArrowLeft': {
        items[this.index].tabIndex = -1;
        if (this.index === 0) {
          this.index = items.length - 1;
        } else {
          this.index--;
        }
        items[this.index].tabIndex = 0;
        items[this.index].focus();
        break;
      }
      case 'Home': {
        items[this.index].tabIndex = -1;
        this.index = 0;
        items[this.index].tabIndex = 0;
        items[this.index].focus();
        break;
      }
      case 'End': {
        items[this.index].tabIndex = -1;
        this.index = items.length - 1;
        items[this.index].focus();
        items[this.index].tabIndex = 0;
        break;
      }
      default:
        break;
    }
  };
}
