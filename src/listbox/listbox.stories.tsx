import * as React from 'react';

import { ListboxProps, useAriaListbox } from '.';

import { Wrapper } from './listbox.styles';

/**
 * Note that the `useAriaLisbox` hook works both with controlled and uncontrolled versions.
 * This means that the `isOpen` configuration is optional. When provided, the hook will consider it's value; 
 * when not provided, the hook will control whether or not the menu is open, and the component consuming it
 * won't be able to distinguish whether or not it's opened.
 * 
 * Required CSS:
 * 
 * ```css
.listbox {
      margin: 0;
      background-color: white;
      border: 1px solid #eaebee;
      padding: 4px;
      list-style: none;

      position: absolute;
      top: calc(100% + 4px);

      max-height: 100px;
      overflow: auto;

      width: 90px;
}

.listbox[aria-hidden='true'] {
      display: none;
}

.selected {
      background: blue;
}
 * ```
 */
export const Listbox: React.FC<ListboxProps> = () => {
  const [selectedValue, setSelectedValue] = React.useState<string>('entry-1');

  const entries = React.useMemo(
    () => [
      { id: 'entry-1', label: 'Entry 1' },
      { id: 'entry-2', label: 'Entry 2' },
      { id: 'entry-3', label: 'Entry 3' },
      { id: 'entry-4', label: 'Entry 4' },
      { id: 'entry-5', label: 'Entry 5' },
    ],
    []
  );

  const { triggerProps, listboxProps, entryItemProps } = useAriaListbox({
    id: 'listbox-component',
    selectedValue,
    triggerLabel: 'Open listbox',
    closeOnSelect: true,
    onSelect: setSelectedValue,
  });

  return (
    <Wrapper>
      <div style={{ position: 'relative' }}>
        <button
          {...triggerProps}
          onClick={(e) => {
            e.stopPropagation();
            triggerProps.onClick(e);
          }}
        >
          {entries.find((e) => e.id === selectedValue)?.label ||
            'Select option'}
        </button>

        <ul className="listbox" {...listboxProps}>
          {entries.map((entry) => (
            <li key={entry.id} {...entryItemProps(entry.id)}>
              {entry.label}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default { title: 'Aria Component/Listbox', component: Listbox };
