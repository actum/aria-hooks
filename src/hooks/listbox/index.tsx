import { HTMLProps, useCallback, useMemo, useRef } from 'react';
import { ARIA_EXPANDED, ARIA_HIDDEN, ARIA_SELECTED } from '../../constants';
import { ListboxController } from './controller';

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

export const useAriaListbox = ({
  id,
  selectedValue,
  triggerLabel,
  isOpen,
  onSelect,
  closeOnSelect,
  onToggle,
}: ListboxProps) => {
  const controller = useRef(new ListboxController(id));

  const triggerProps = useMemo(
    () => ({
      'aria-label': triggerLabel,
      'aria-haspopup':
        'listbox' as HTMLProps<HTMLButtonElement>['aria-haspopup'],
      [ARIA_EXPANDED]:
        typeof isOpen === 'boolean' ? isOpen : controller.current.getOpen(),
      ref: controller.current.setTriggerElement,
      onClick: (e) => {
        e.target.focus();
        controller.current.open();
        onToggle?.(true);
      },
    }),
    [isOpen, triggerLabel]
  );

  const listboxProps = useMemo(
    () => ({
      ref: controller.current.setContentElement,
      onClick: (e) => e.stopPropagation(),
      [ARIA_HIDDEN]: 'true' as HTMLProps<HTMLUListElement>['aria-hidden'],
      role: 'listbox',
      'aria-activedescendant': selectedValue,
      tabIndex: -1,
      id,
      onKeyDown: controller.current.handleKeyDown((id: string) => {
        onSelect?.(id);
        controller.current.select(id);
        if (closeOnSelect) {
          controller.current.close();
          onToggle?.(false);
        }
      }),
    }),
    [selectedValue, id]
  );

  const entryItemProps = useCallback(
    (id: string) => ({
      id,
      role: 'option',
      [ARIA_SELECTED]: id === selectedValue,
      onClick: () => {
        onSelect?.(id);
        controller.current.select(id);
        if (closeOnSelect) {
          controller.current.close();
          onToggle?.(false);
        }
      },
    }),
    []
  );

  return useMemo(
    () => ({
      triggerProps,
      listboxProps,
      entryItemProps,
    }),
    [triggerProps, listboxProps, entryItemProps]
  );
};
