import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { ARIA_HIDDEN } from '../../constants';
import { SELECTED_CLASS_NAME } from './controller';
import { Listbox } from './listbox.component';

const openListbox = (container: HTMLElement) => {
  const button = container.querySelector('button');
  fireEvent.click(button);
};

const renderListbox = () => render(<Listbox />);

describe('Tests for useAriaListbox', () => {
  it('should render a triggering button for the listbox', () => {
    const { container } = renderListbox();

    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should open the listbox when trigger is clicked', () => {
    const { container } = renderListbox();

    const listbox = container.querySelector('.listbox');

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('true');

    openListbox(container);

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('false');

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    // default focus on first entry.
    expect(entries[0].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  });

  it('should focus the next item when pressing down arrow', () => {
    const { container } = renderListbox();

    const listbox = container.querySelector('.listbox');

    openListbox(container);

    fireEvent.keyDown(listbox, {
      key: 'ArrowDown',
    });

    const entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    expect(entries[1].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  });

  it('should focus the previous item when pressing up arrow', () => {
    const { container } = renderListbox();

    const listbox = container.querySelector('.listbox');

    openListbox(container);

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    entries[0].classList.remove(SELECTED_CLASS_NAME);
    entries[2].classList.add(SELECTED_CLASS_NAME);

    fireEvent.keyDown(listbox, {
      key: 'ArrowUp',
    });

    entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    expect(entries[1].classList.contains(SELECTED_CLASS_NAME)).toBeTruthy();
  });

  it('should focus the last item when pressing end', () => {
    const { container } = renderListbox();

    const listbox = container.querySelector('.listbox');

    openListbox(container);

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    fireEvent.keyDown(listbox, {
      key: 'End',
    });

    entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    expect(
      entries[entries.length - 1].classList.contains(SELECTED_CLASS_NAME)
    ).toBeTruthy();
  });

  it('should focus the first item when pressing home', () => {
    const { container } = renderListbox();

    const listbox = container.querySelector('.listbox');

    openListbox(container);

    fireEvent.keyDown(listbox, {
      key: 'End',
    });

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    expect(
      entries[entries.length - 1].classList.contains(SELECTED_CLASS_NAME)
    ).toBeTruthy();
  });

  it('should select value when pressing return', () => {
    const { container } = renderListbox();

    openListbox(container);

    const listbox = container.querySelector('.listbox');

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    entries[0].classList.remove(SELECTED_CLASS_NAME);
    entries[2].classList.add(SELECTED_CLASS_NAME);

    fireEvent.keyDown(listbox, {
      key: 'Enter',
    });

    const button = container.querySelector('button');

    expect(entries[2].innerHTML).toEqual(button.innerHTML);
  });

  it('should select value clicking entry', () => {
    const { container } = renderListbox();

    openListbox(container);

    const listbox = container.querySelector('.listbox');

    let entries = Array.from(listbox.querySelectorAll('[role="option"]'));

    fireEvent.click(entries[2]);

    const button = container.querySelector('button');

    expect(entries[2].innerHTML).toEqual(button.innerHTML);
  });
});
