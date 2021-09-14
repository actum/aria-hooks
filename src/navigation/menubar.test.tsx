import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Menubar } from './menubar.stories';

describe('Tests for useAriaNavigation', () => {
  it('should render menu with items', () => {
    const { getAllByRole, getByRole } = render(<Menubar {...({} as any)} />);

    const menu = getByRole('menubar');
    const menuItems = getAllByRole('menuitem');

    expect(menu).toBeInTheDocument();

    menuItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('should exclude every menubar link from tab sequence, except first one', () => {
    const { getAllByRole } = render(<Menubar {...({} as any)} />);

    const menuItems = getAllByRole('menuitem');

    menuItems.forEach((link, idx) => {
      if (idx === 0) {
        expect(link.tabIndex).toBe(0);
      } else {
        expect(link.tabIndex).toBe(-1);
      }
    });
  });

  // it('should move focus to next/first(if current focused element is last item) element when right arrow key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowRight' });

  //   expect(menuItems[1].innerHTML).toBe(document.activeElement.innerHTML);
  // });

  // it('should move focus to first element when Home key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowLeft' });
  //   fireEvent.keyDown(window, { key: 'Home' });

  //   expect(menuItems[0]).toEqual(document.activeElement);
  // });

  // it('should move focus to last element when End key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'End' });

  //   expect(menuItems[menuItems.length - 1]).toEqual(document.activeElement);
  // });

  // it('should move focus to previous/last(if current focused element is first item) element when left arrow key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowLeft' });

  //   expect(menuItems[menuItems.length - 1]).toEqual(document.activeElement);
  // });

  // it('should change tabIndex of focused element to 0 and previous focused element to -1 when right arrow key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowRight' });

  //   expect(menuItems[0].tabIndex).toBe(-1);
  //   expect(menuItems[1].tabIndex).toBe(0);
  // });

  // it('should change tabIndex of focused element to 0 and next focusable element to -1 when left arrow key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowLeft' });

  //   expect(menuItems[0].tabIndex).toBe(-1);
  //   expect(menuItems[menuItems.length - 1].tabIndex).toBe(0);
  // });
  // it('should change tabIndex of first focusable element to 0 and previous focused element to -1 when Home key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'ArrowLeft' });
  //   fireEvent.keyDown(window, { key: 'Home' });

  //   expect(menuItems[0].tabIndex).toBe(0);
  //   expect(menuItems[menuItems.length - 1].tabIndex).toBe(-1);
  // });
  // it('should change tabIndex of last focusable element to 0 and previous focused element to -1 when End key is pressed', () => {
  //   const { getAllByRole } = render(<Menubar {...({} as any)} />);

  //   const menuItems = getAllByRole('menuitem');

  //   act(() => {
  //     menuItems[0].focus();
  //   });

  //   fireEvent.keyDown(window, { key: 'End' });

  //   expect(menuItems[menuItems.length - 1].tabIndex).toBe(0);
  //   expect(menuItems[1].tabIndex).toBe(-1);
  // });
  // it('should open submenu when down arrow key is pressed', () => {
  //   const { getByRole } = render(<Menubar {...({} as any)} />);

  //   const submenu = getByRole('menu');

  //   expect(submenu.style.display).toBe('none');
  // });
  // it('should open submenu when down arrow key is pressed', () => {
  //   const { getByRole } = render(<Menubar {...({} as any)} />);

  //   const submenu = getByRole('menu');

  //   // expect(submenu);
  // });
});
