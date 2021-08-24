import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from './tooltip.stories';

describe('Tests for useAriaNavigation', () => {
  it('should render button and tooltip', () => {
    const { getByRole, container } = render(<Tooltip {...({} as any)} />);

    const button = getByRole('button');
    const tooltip = container.querySelector('#tooltip');
    // const tooltip = getByRole('tooltip');

    expect(button).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();
    expect(tooltip.getAttribute('role')).toBe('tooltip');
  });

  it('should open tooltip when button receives focus', () => {
    const { getByRole, container } = render(<Tooltip {...({} as any)} />);
    const button = getByRole('button');
    const tooltip = container.querySelector('#tooltip');

    expect(tooltip).not.toBeVisible();

    fireEvent.focus(button);

    expect(tooltip).toBeVisible();
  });

  it('should close tooltip when button loses focus', () => {
    const { getByRole, container } = render(<Tooltip {...({} as any)} />);
    const button = getByRole('button');
    const tooltip = container.querySelector('#tooltip');

    fireEvent.focus(button);
    fireEvent.blur(button);

    expect(tooltip).not.toBeVisible();
  });

  it('should close tooltip when escape key is pressed', () => {
    const { getByRole, container } = render(<Tooltip {...({} as any)} />);
    const button = getByRole('button');
    const tooltip = container.querySelector('#tooltip');

    fireEvent.focus(button);
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(tooltip).not.toBeVisible();
  });
});
