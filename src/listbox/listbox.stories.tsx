import * as React from 'react';
import styled from 'styled-components';

import { ListboxProps, useAriaListbox } from '.';
import { SELECTED_CLASS_NAME } from './controller';

const Wrapper = styled.div`
  position: relative;
  height: 400px;
  color: #2e2d2c;

  button {
    cursor: pointer;
    &:focus,
    &:hover {
      color: #d93c31;
    }

    display: flex;
    align-items: center;
    border-radius: 0;
    padding: 12px;
    background-color: #fff;

    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    outline: 0;
    border: 1px solid transparent;

    transition-property: color, border, background-color, box-shadow;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    transition-duration: 0.2s;
  }

  .listbox {
    margin: 0;
    padding: 0;
    min-width: 0;
    border: 1px solid #2e2d2c;
    border-radius: 0;
    background-color: white;
    list-style: none;
    box-sizing: border-box;

    position: absolute;
    top: calc(100% + 4px);

    li {
      padding: 4px 0;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      border: 1px solid transparent;
      margin: -1px;
      position: relative;
      width: calc(100% + 2px);
      box-sizing: border-box;
      padding: 14px 12px;

      text-align: center;
      z-index: 1;

      &:hover,
      &.${SELECTED_CLASS_NAME} {
        text-decoration: none;
        border-color: #d93c31;
        background-color: #f5f5f5;
      }
    }

    &:focus {
      outline: none;
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
