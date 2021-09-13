import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { ARIA_HIDDEN } from '../constants';
import { SELECTED_CLASS_NAME } from './controller';
import { Listbox } from './listbox.component';

describe('Tests for useAriaListbox', () => {
  it('should render a triggering button for the listbox', () => {
    const { container } = render(<Listbox {...({} as any)} />);

    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should open the listbox when trigger is clicked', () => {
    const { getByText, container } = render(<Listbox {...({} as any)} />);

    const button = container.querySelector('button');
    const listbox = container.querySelector('.listbox');

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('true');

    fireEvent.click(button);

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('false');

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    // default focus on first entry.
    expect(entries[0].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  });

  // it('should focus the next item when pressing down arrow', () => {
  //   const { getByText, container } = render(<Listbox {...({} as any)} />);

  //   const button = getByText('Select option');
  //   const listbox = container.querySelector('.listbox');

  //   fireEvent.click(button);

  //   fireEvent.keyDown(listbox, {
  //     key: 'ArrowDown',
  //   });

  //   const entries = Array.from(listbox.querySelectorAll('[role="option"]'));

  //   expect(entries[1].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  // });

  // it('should focus the previous item when pressing up arrow', () => {
  //   const { getByText, container } = render(<Listbox {...({} as any)} />);

  //   const button = getByText('Select option');
  //   const listbox = container.querySelector('.listbox');

  //   fireEvent.click(button);

  //   let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

  //   entries[0].classList.remove(SELECTED_CLASS_NAME);
  //   entries[2].classList.add(SELECTED_CLASS_NAME);

  //   fireEvent.keyDown(listbox, {
  //     key: 'ArrowUp',
  //   });

  //   entries = Array.from(listbox.querySelectorAll('[role="option"]'));

  //   expect(entries[1].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  // });

  // it('should focus the last item when pressing end', () => {
  //   const { getByText, container } = render(<Listbox {...{} as any} />)

  //   const button = getByText('Select option')
  //   fireEvent.click(button)

  // })

  // it('should focus the first item when pressing home', () => {
  //   const { getByText, container } = render(<Listbox {...{} as any} />)

  //   const button = getByText('Select option')
  //   fireEvent.click(button)

  // })

  // it('should select value when pressing return', () => {
  //   const { getByText, container } = render(<Listbox {...{} as any} />)

  //   const button = getByText('Select option')
  //   fireEvent.click(button)

  // })

  // it('should select value clicking entry', () => {
  //   const { getByText, container } = render(<Listbox {...{} as any} />)

  //   const button = getByText('Select option')
  //   fireEvent.click(button)

  // })
});
