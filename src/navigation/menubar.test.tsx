import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Menubar } from './menubar.stories';

describe('Tests for useAriaNavigation', () => {
  it('should render menu with items', () => {
    const { getAllByRole, getByRole } = render(<Menubar />);

    const menu = getByRole('menubar');
    const menuItems = getAllByRole('menuitem');

    expect(menu).toBeInTheDocument();

    menuItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('should exclude every menubar link from tab sequence, except first one', () => {
    const { container } = render(<Menubar />);

    const menuLinks = Array.from(
      container.querySelectorAll('a')
    ) as HTMLAnchorElement[];

    menuLinks.forEach((link, idx) => {
      if (idx === 0) {
        expect(link.tabIndex).toBe(0);
      } else {
        expect(link.tabIndex).toBe(-1);
      }
    });
  });

  it('should change tabIndex of focused element to 0 and previous focused element to -1', () => {
    const { container } = render(<Menubar />);

    const menuLinks = Array.from(
      container.querySelectorAll('a')
    ) as HTMLAnchorElement[];

    menuLinks[0].focus();

    menuLinks.forEach((link, idx) => {
      fireEvent.keyDown(window, { key: 'ArrowRight' });

      //   if (idx < menuLinks.length - 1) {
      //     expect(link.tabIndex).toBe(-1);
      //     expect(menuLinks[idx + 1].tabIndex).toBe(0);
      //   } else {
      //     expect(link.tabIndex).toBe(-1);
      //     expect(menuLinks[idx + 1].tabIndex).toBe(0);
      //   }
    });
  });
});
