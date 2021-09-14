export class TabsController {
  private tabsRef: HTMLElement;

  constructor() {}

  setActivity = (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const items = Array.from(
      this.tabsRef.querySelectorAll('[role="tab"]')
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

  setTabListRef = (tabList: HTMLElement) => {
    this.tabsRef = tabList;
  };

  setStates = () => {
    const tabpanels = Array.from(
      this.tabsRef.querySelectorAll('[role="tabpanel"]')
    ) as HTMLElement[];

    const tabs = Array.from(
      this.tabsRef.querySelectorAll('[role="tab"]')
    ) as HTMLElement[];

    tabpanels.forEach((tabpanel) => {
      const tabId = tabpanel.getAttribute('aria-labelledby');

      if (tabId === document.activeElement.id) {
        tabpanel.style.display = 'block';
      } else {
        tabpanel.style.display = 'none';
      }
    });

    tabs.forEach((tab) => {
      if (tab.id === document.activeElement.id) {
        tab.setAttribute('aria-selected', 'true');
        tab.tabIndex = 0;
      } else {
        tab.tabIndex = -1;
        tab.setAttribute('aria-selected', 'false');
      }
    });
  };

  getIndex = (targetItem?: HTMLElement) => {
    if (this.tabsRef === undefined) return -1;

    const items = Array.from(
      this.tabsRef.querySelectorAll('[role="tab"]')
    ) as HTMLElement[];

    if (targetItem) {
      return items.findIndex((item) => item.isSameNode(targetItem));
    } else {
      return items
        ? items.findIndex((item) => item.isSameNode(document.activeElement))
        : -1;
    }
  };

  changeFocusToItem = (
    position: 'next' | 'prev' | 'first' | 'last' | 'custom',
    targetItem?: HTMLElement
  ) => {
    const items = Array.from(
      this.tabsRef.querySelectorAll('[role="tab"]')
    ) as HTMLElement[];

    let index = this.getIndex() === -1 ? 0 : this.getIndex();

    if (position === 'last') {
      index = items.length - 1;
    } else if (position === 'first') {
      index = 0;
    } else if (position === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else if (position === 'prev') {
      index = index <= 0 ? items.length - 1 : index - 1;
    } else if (position === 'custom') {
      if (!targetItem) return;
      index = this.getIndex(targetItem);
    }

    items[index]?.focus();
    this.setStates();
  };

  handleMouseClick = (e: MouseEvent) => {
    const items = Array.from(
      this.tabsRef.querySelectorAll('[role="tab"]')
    ) as HTMLElement[];

    const targetEl = e.target as HTMLElement;

    if (items.includes(targetEl as HTMLElement)) {
      this.changeFocusToItem('custom', targetEl as HTMLElement);
    }
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
      default: {
        break;
      }
    }
  };
}
