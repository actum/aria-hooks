import * as React from 'react';
import { useAriaListbox } from '.';
import { ListboxProps, ListboxReturnProps } from './types';
import { Wrapper } from './listbox.styles';
import { fontSizes } from '../../styles/variables';

export const Listbox: React.FC = () => {
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

  const [selectedValue, setSelectedValue] = React.useState<string>(
    entries[0].id
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
          <svg
            width={fontSizes.xl}
            height={fontSizes.xl}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon btn__icon"
          >
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
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

export const ListboxHookProps: React.FC<ListboxProps> = () => null;

export const ListboxTriggerHookReturnProps: React.FC<
  ListboxReturnProps['triggerProps']
> = () => null;

export const ListboxBoxHookReturnProps: React.FC<
  ListboxReturnProps['listboxProps']
> = () => null;

export const ListboxEntryHookReturnProps: React.FC<
  ReturnType<ListboxReturnProps['entryItemProps']>
> = () => null;
