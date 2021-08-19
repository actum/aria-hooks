import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './modal.stories';

describe('Tests for useAriaModal', () => {
  it('should render a button to open modal', () => {
    const { getByText } = render(<Modal />);

    expect(getByText('Open Modal')).toBeInTheDocument();
  });

  it('should open the modal', () => {
    const { getByText, container } = render(<Modal />);

    const button = getByText('Open Modal');

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();

    fireEvent.click(button);

    expect(
      container.querySelector('[aria-hidden="false"]')
    ).toBeInTheDocument();
  });

  it('should close the modal when pressing escape key', () => {
    const { getByText, container } = render(<Modal />);

    const button = getByText('Open Modal');

    fireEvent.click(button);
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('should close the modal when clicking outside modal', () => {
    const { getByText, container } = render(<Modal />);

    const button = getByText('Open Modal');

    fireEvent.click(button);

    // click outside modal
    fireEvent.click(container.querySelector('.modal-backdrop'));

    expect(
      container.querySelector('[aria-hidden="false"]')
    ).toBeInTheDocument();
  });
});
