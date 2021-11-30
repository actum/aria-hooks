import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Accordion } from './accordion.stories';

describe('Tests for useAriaAccordion', () => {
  it('should render Accordion with items', () => {
    const { container } = render(<Accordion {...({} as any)} />);

    const panels = container.querySelectorAll('.acc_panel');
    const buttons = container.querySelectorAll('.acc_btn');

    panels.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    buttons.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('should toggle panel visibility when associated button is clicked', () => {
    const { container } = render(<Accordion {...({} as any)} />);

    const panel = container.querySelectorAll('.acc_panel')[0] as HTMLDivElement;
    const panelButton = container.querySelector(
      `#${panel.getAttribute('aria-labelledby')}`
    );

    const display = panel.style.display;

    if (display === 'none') {
      fireEvent.click(panelButton);
      expect(display).not.toBe('none');
    } else {
      fireEvent.click(panelButton);
      expect(display).toBe('none');
    }
  });

  it('should move focus to next/first(if current focused element is last item) element when down arrow key is pressed ', () => {
    const { container } = render(<Accordion {...({} as any)} />);

    const panelButtons = Array.from(
      container.querySelectorAll('.acc_btn')
    ) as HTMLButtonElement[];

    act(() => {
      panelButtons[0].focus();
    });

    fireEvent.keyDown(window, { key: 'ArrowDown' });

    expect(panelButtons[1]).toBe(document.activeElement);
  });
  it('should move focus to previous/last(if current focused element is first item) element when up arrow key is pressed ', () => {
    const { container } = render(<Accordion {...({} as any)} />);

    const panelButtons = Array.from(
      container.querySelectorAll('.acc_btn')
    ) as HTMLButtonElement[];

    act(() => {
      panelButtons[0].focus();
    });

    fireEvent.keyDown(window, { key: 'ArrowUp' });

    expect(panelButtons[panelButtons.length - 1]).toBe(document.activeElement);
  });
});
