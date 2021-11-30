import { HTMLProps } from 'react';

export interface ListboxProps {
  /**
   * Unique ID for the menu
   */
  id: string;
  /**
   * Whether or not the menu is open
   */
  isOpen?: boolean;
  /**
   * The label of the triggering button
   */
  triggerLabel?: string;
  /**
   * ID of the selected entry (if any)
   */
  selectedValue?: string;
  /**
   * Callback for when selection of entry happens
   *
   * @param val: the id of the selected entry
   */
  onSelect?: (val: string) => void;
  /**
   * Whether or not menu should close when selecting entry
   *
   * @default false
   */
  closeOnSelect?: boolean;
  /**
   * Callback when toggling open/close
   * If not provided, the component will work uncontrolled
   *
   * @param open: whether or not listbox is open
   */
  onToggle?: (open: boolean) => void;
}

export interface ListboxReturnProps {
  triggerProps: {
    'aria-label': string;
    'aria-haspopup': HTMLProps<HTMLButtonElement>['aria-haspopup'];
    'aria-expanded': boolean;
    ref: (element: HTMLButtonElement) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
  listboxProps: {
    ref: (element: HTMLUListElement) => void;
    onClick: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
    'aria-hidden': boolean;
    role: 'listbox';
    'aria-activedescendant': string;
    tabIndex: -1;
    id: string;
    onKeyDown: (e: React.KeyboardEvent<HTMLUListElement>) => void;
  };
  entryItemProps: (id: string) => {
    id: string;
    role: 'option';
    'aria-selected': boolean;
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  };
}
