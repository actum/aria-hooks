import { KeyboardEvent } from 'react';

export class NavigationContoller {
  private menuRef: HTMLElement;
  private id: string;
  private isSubmenuLink: boolean;
  private indexMainMenu: number;

  constructor(id: string, isSubmenuLink?: boolean) {
    this.id = id;
    this.isSubmenuLink = isSubmenuLink;
  }

  setMenuRef = (menu: HTMLElement) => {
    this.menuRef = menu || document.getElementById(this.id);
  };

  setActivity = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const items = Array.from(
      this.menuRef.querySelectorAll('li>[role="menuitem"]')
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
    window.addEventListener('keydown', this.handleKeyPress as any);
  };

  onInactive = () => {
    window.removeEventListener('keydown', this.handleKeyPress as any);
  };

  setMainMenuIndex = (idx: number) => {
    if (idx !== -1) {
      this.indexMainMenu = idx;
    }
  };

  getFocusedIndex = (optItems?: HTMLAnchorElement[]) => {
    if (this.menuRef === undefined) return -1;

    const items = optItems
      ? optItems
      : (Array.from(
          this.menuRef.querySelectorAll(
            'ul[role="menubar"]>li> [role="menuitem"]'
          )
        ) as HTMLAnchorElement[]);

    return items
      ? items.findIndex((item) => item.isSameNode(document.activeElement))
      : -1;
  };

  changeFocusToItem = (
    item?: 'next' | 'prev' | 'first' | 'last',
    submenuItems?: HTMLAnchorElement[]
  ) => {
    const items = submenuItems
      ? submenuItems
      : (Array.from(
          this.menuRef.querySelectorAll(
            'ul[role="menubar"]>li> [role="menuitem"]'
          )
        ) as HTMLAnchorElement[]);

    let index =
      this.getFocusedIndex(items) === -1
        ? this.indexMainMenu
        : this.getFocusedIndex(items);

    if (item === 'last') {
      index = items.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else if (item === 'prev') {
      index = index <= 0 ? items.length - 1 : index - 1;
    }

    items.forEach((item, i) => {
      item.tabIndex = index === i ? 0 : -1;
    });

    if (!submenuItems) this.setMainMenuIndex(index);

    items[index]?.focus();
  };

  hideSubmenus = () => {
    const submenus = Array.from(
      this.menuRef.querySelectorAll('[role="menu"]')
    ) as HTMLUListElement[];

    submenus.forEach((item) => {
      const items = Array.from(
        item.querySelectorAll('[role="menuitem"]')
      ) as HTMLElement[];

      items.forEach((i) => {
        i.tabIndex = -1;
      });

      item.style.display = 'none';
    });
  };

  getSubmenuStates = (currentElement: HTMLElement) => {
    const parentLi = currentElement.parentElement as HTMLElement;
    const parentMenu = parentLi.parentElement as HTMLElement;

    const hasSubmenu =
      currentElement.getAttribute('aria-haspopup') === 'true' ? true : false;

    const isSubmenu = parentMenu.getAttribute('role') === 'menu' ? true : false;

    let isSubmenuVisible: boolean;

    let submenu: HTMLElement;

    let items: HTMLAnchorElement[];

    if (hasSubmenu || isSubmenu) {
      submenu = isSubmenu ? parentMenu : parentLi.querySelector('ul');
      items = Array.from(submenu.querySelectorAll('[role="menuitem"]'));
      isSubmenuVisible = submenu.style.display !== 'none' ? true : false;
    }

    return {
      hasSubmenu,
      isSubmenu,
      submenu,
      items,
      isSubmenuVisible,
    };
  };

  handleKeyPress = (e: KeyboardEvent) => {
    const { hasSubmenu, isSubmenu, submenu, items, isSubmenuVisible } =
      this.getSubmenuStates(e.target as HTMLElement);

    switch (e.key) {
      case 'ArrowRight': {
        this.changeFocusToItem('next');
        this.hideSubmenus();

        break;
      }
      case 'ArrowLeft': {
        this.changeFocusToItem('prev');
        this.hideSubmenus();
        break;
      }
      case 'Home': {
        if (isSubmenu) {
          this.changeFocusToItem('first', items);
        } else {
          this.changeFocusToItem('first');
          this.hideSubmenus();
        }
        break;
      }
      case 'End': {
        if (isSubmenu) {
          this.changeFocusToItem('last', items);
        } else {
          this.changeFocusToItem('last');
          this.hideSubmenus();
        }

        break;
      }
      case 'ArrowDown': {
        if (hasSubmenu || isSubmenu) {
          if (isSubmenuVisible) {
            this.changeFocusToItem('next', items);
          } else {
            submenu.style.display = 'initial';
            this.changeFocusToItem('first', items);
          }
        }

        break;
      }
      case 'ArrowUp': {
        if (isSubmenu) {
          if (isSubmenuVisible) {
            this.changeFocusToItem('next', items);
          } else {
            submenu.style.display = 'initial';
            this.changeFocusToItem('first', items);
          }
        }

        break;
      }
      case 'Escape': {
        this.changeFocusToItem();
        this.hideSubmenus();

        break;
      }
      case 'Enter':
      case ' ': {
        if (hasSubmenu && !isSubmenuVisible && !this.isSubmenuLink) {
          e.preventDefault();
          submenu.style.display = 'initial';
          this.changeFocusToItem('first', items);
        }

        break;
      }
      default: {
        break;
      }
    }
  };
}
