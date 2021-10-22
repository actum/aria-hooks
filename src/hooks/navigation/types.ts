export interface NavigationProps {
  /**
   * Unique ID for the menu
   */
  id: string;
  /**
   * Label for menu, which will be presented to screen readers
   */
  menubarLabel?: string;
  /**
   *  Whether or not top item with submenu is link
   */
  isSubmenuLink?: boolean;
}

export interface NavigationReturnProps {
  itemProps: {
    role: 'none';
  };
  menuItemProps: (
    i: number,
    hasSubmenu?: boolean
  ) => {
    role: 'menuitem';
    tabIndex: number;
    'aria-haspopup'?: boolean;
    'aria-expanded'?: boolean;
  };
  menubarProps: {
    id: string;
    role: 'menubar';
    'aria-label': string;
    ref: (element: HTMLElement) => void;
    style: any;
  };
  submenuProps: (label: string) => {
    role: 'menu';
    'aria-label': string;
    style: { display: 'none' };
  };
}
