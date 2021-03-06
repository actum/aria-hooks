import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Drawer } from './drawer.stories';
import { ARIA_HIDDEN } from '../constants';

describe('Tests for useAriaDrawer', () => {
  it('should render a button to open drawer', () => {
    const { getByText } = render(<Drawer {...({} as any)} />);

    expect(getByText('Open Drawer')).toBeInTheDocument();
  });

  it('should open the drawer', () => {
    const { getByText, container } = render(<Drawer {...({} as any)} />);

    const button = getByText('Open Drawer');

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();

    fireEvent.click(button);

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="false"]`)
    ).toBeInTheDocument();
  });

  it('should close the drawer when clicking close button', () => {
    const { getByText, container } = render(<Drawer {...({} as any)} />);

    const openButton = getByText('Open Drawer');
    const closeButton = getByText('Close');

    fireEvent.click(openButton);
    fireEvent.click(closeButton);

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();
  });

  it('should close the drawer when clicking outside it', () => {
    const { getByText, container } = render(<Drawer {...({} as any)} />);

    const openButton = getByText('Open Drawer');

    fireEvent.click(openButton);

    // click outside drawer
    fireEvent.click(container.querySelector('.modal-backdrop'));

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();
  });

  it('should close the drawer when pressing escape key', () => {
    const { getByText, container } = render(<Drawer {...({} as any)} />);

    const openButton = getByText('Open Drawer');

    fireEvent.click(openButton);
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();
  });
});
