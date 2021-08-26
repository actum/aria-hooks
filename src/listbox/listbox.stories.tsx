import * as React from 'react';
import styled from 'styled-components';

import { ListboxProps, useAriaListbox } from '.';

const Wrapper = styled.div`
  position: relative;
  height: 300px;

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

    li {
      padding: 4px 0;
    }
  }

  .listbox[aria-hidden='true'] {
    display: none;
  }
`;

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
 * ```
 */
export const Listbox: React.FC<ListboxProps> = () => {
  const [selectedValue, setSelectedValue] = React.useState<string>();

  const entries = React.useMemo(
    () => [
      { id: 'entry-1', label: 'Entry 1' },
      { id: 'entry-2', label: 'Entry 2' },
      { id: 'entry-3', label: 'Entry 3' },
      { id: 'entry-4', label: 'Entry 4' },
      { id: 'entry-5', label: 'Entry 5' },
      { id: 'entry-6', label: 'Entry 6' },
      { id: 'entry-7', label: 'Entry 7' },
      { id: 'entry-8', label: 'Entry 8' },
      { id: 'entry-9', label: 'Entry 9' },
      { id: 'entry-10', label: 'Entry 10' },
      { id: 'entry-11', label: 'Entry 11' },
      { id: 'entry-12', label: 'Entry 12' },
      { id: 'entry-13', label: 'Entry 13' },
      { id: 'entry-14', label: 'Entry 14' },
      { id: 'entry-15', label: 'Entry 15' },
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
        <button {...triggerProps}>
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
