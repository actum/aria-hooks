import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './modal.stories';
import { ARIA_HIDDEN } from '../constants';

describe('Tests for useAriaModal', () => {
  it('should render a button to open modal', () => {
    const { getByText } = render(<Modal {...({} as any)} />);

    expect(getByText('Open Modal')).toBeInTheDocument();
  });

  it('should open the modal', () => {
    const { getByText, container } = render(<Modal {...({} as any)} />);

    const button = getByText('Open Modal');

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();

    fireEvent.click(button);

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="false"]`)
    ).toBeInTheDocument();
  });

  it('should close the modal when pressing escape key', () => {
    const { getByText, container } = render(<Modal {...({} as any)} />);

    const button = getByText('Open Modal');

    fireEvent.click(button);
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="true"]`)
    ).toBeInTheDocument();
  });

  it('should close the modal when clicking outside modal', () => {
    const { getByText, container } = render(<Modal {...({} as any)} />);

    const button = getByText('Open Modal');

    fireEvent.click(button);

    // click outside modal
    fireEvent.click(container.querySelector('.modal-backdrop'));

    expect(
      container.querySelector(`[${ARIA_HIDDEN}="false"]`)
    ).toBeInTheDocument();
  });
});
