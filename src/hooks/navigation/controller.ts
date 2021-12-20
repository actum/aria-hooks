export class NavigationContoller {
  private menuRef: HTMLElement;
  private id: string;
  private isSubmenuLink: boolean;
  private indexMainMenu: number;
  private firstLetters: { item: HTMLAnchorElement; firstLetter: string }[];

  constructor(id: string, isSubmenuLink?: boolean) {
    this.id = id;
    this.isSubmenuLink = isSubmenuLink;
  }

  setMenuRef = (menu: HTMLElement) => {
    this.menuRef = menu || document.getElementById(this.id);
  };

  setFirstLetters = () => {
    const items = Array.from(
      this.menuRef.querySelectorAll('ul[role="menubar"]>li> [role="menuitem"]')
    ) as HTMLAnchorElement[];

    this.firstLetters = items.map((menuItem) => ({
      item: menuItem,
      firstLetter: menuItem.innerText[0].toLowerCase(),
    }));
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

  getItemIndex = (testedItem: HTMLAnchorElement) => {
    if (this.menuRef === undefined) return -1;

    const items = Array.from(
      this.menuRef.querySelectorAll('ul[role="menubar"]>li> [role="menuitem"]')
    ) as HTMLAnchorElement[];

    return items ? items.findIndex((item) => item.isSameNode(testedItem)) : -1;
  };

  changeFocusToItem = (
    item?: 'next' | 'prev' | 'first' | 'last' | number,
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
    } else {
      index = item;
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

  getSubmenuStates = (
    el: HTMLElement = document.activeElement as HTMLElement
  ) => {
    const currentElement = 'innerHTML' in el ? el : document.activeElement;

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

  handleKeyDown = (e: KeyboardEvent) => {
    if ((e.target as HTMLElement).getAttribute('role') === 'menuitem') {
      const { hasSubmenu, isSubmenu, submenu, items, isSubmenuVisible } =
        this.getSubmenuStates(e.target as HTMLElement);

      switch (e.key) {
        case 'ArrowRight': {
          e.preventDefault();
          this.changeFocusToItem('next');
          this.hideSubmenus();

          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          this.changeFocusToItem('prev');
          this.hideSubmenus();
          break;
        }
        case 'Home': {
          e.preventDefault();
          if (isSubmenu) {
            this.changeFocusToItem('first', items);
          } else {
            this.changeFocusToItem('first');
            this.hideSubmenus();
          }
          break;
        }
        case 'End': {
          e.preventDefault();
          if (isSubmenu) {
            this.changeFocusToItem('last', items);
          } else {
            this.changeFocusToItem('last');
            this.hideSubmenus();
          }

          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
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
          e.preventDefault();
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
          e.preventDefault();
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

      // "Custom switch" for letters
      for (const { firstLetter, item } of this.firstLetters) {
        if (e.key === firstLetter) {
          const index = this.getItemIndex(item);

          e.preventDefault();
          this.changeFocusToItem(index);
          this.hideSubmenus();
          break;
        }
      }
    }
  };

  regiterEvents = () => {
    const topItemsWithSubmenu = Array.from(
      document.querySelectorAll('ul[role="menubar"]>li')
    ).filter((item) => item.querySelector('[role="menu"]')) as HTMLElement[];

    const submenus = Array.from(
      document.querySelectorAll('[role="menu"]')
    ) as HTMLElement[];

    topItemsWithSubmenu.forEach((item) => {
      item.addEventListener('mouseover', () => {
        const submenuOfItem: HTMLElement = item.querySelector('[role="menu"]');
        if (submenuOfItem.style.display !== 'block') {
          submenuOfItem.style.display = 'block';
        }
      });
      item.addEventListener('mouseleave', () => {
        const submenu: HTMLElement = item.querySelector('[role="menu"]');

        submenu.style.display = 'none';
      });
    });

    submenus.forEach((submenu) => {
      submenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });
      submenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    });

    this.setFirstLetters();
  };

  onActive = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  onInactive = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
}
