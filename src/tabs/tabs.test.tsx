import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Tabs } from './tabs.stories';

describe('Tests for useAriaNavigation', () => {
  it('should render tabs', () => {
    const { getAllByRole, getByRole } = render(<Tabs {...({} as any)} />);

    const tablist = getByRole('tablist');
    const tabs = getAllByRole('tab');
    const tabpanels = getAllByRole('tabpanel');

    expect(tablist).toBeInTheDocument();

    tabs.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    tabpanels.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('should exclude every tab from tab sequence, except first one', () => {
    const { getAllByRole } = render(<Tabs {...({} as any)} />);

    const tabs = getAllByRole('tab');

    tabs.forEach((tab, idx) => {
      if (idx === 0) {
        expect(tab.tabIndex).toBe(0);
      } else {
        expect(tab.tabIndex).toBe(-1);
      }
    });
  });

  it('should move focus to next tab/first tab(if current focused tab is last tab) when right arrow key is pressed', () => {
    const { getAllByRole } = render(<Tabs {...({} as any)} />);

    const tabs = getAllByRole('tab');

    act(() => {
      tabs[0].focus();
    });

    fireEvent.keyDown(window, { key: 'ArrowRight' });

    expect(tabs[1]).toBe(document.activeElement);
  });
  it('same test as above', () => {
    const { getAllByRole } = render(<Tabs {...({} as any)} />);

    const tabs = getAllByRole('tab');

    act(() => {
      tabs[0].focus();
    });

    fireEvent.keyDown(window, { key: 'ArrowRight' });

    expect(tabs[1]).toBe(document.activeElement);
  });

  // it('should move focus to first element when Home key is pressed', () => {
  //   const { getAllByRole } = render(<Tabs {...({} as any)} />);

  //   const tabs = getAllByRole('tab');

  //   act(() => {
  //     tabs[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowRight' });
  //   // fireEvent.keyDown(window, { key: 'Home' });

  //   expect(tabs[1]).toBe(document.activeElement);
  // });
});
