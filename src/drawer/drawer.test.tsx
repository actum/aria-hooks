import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Drawer } from './drawer.stories'

describe('Tests for useAriaDrawer', () => {
  it('should render a button to open drawer', () => {
    const {getByText} = render(<Drawer />)

    expect(getByText('Open Drawer')).toBeInTheDocument()
  })

  it('should open the drawer', () => {
    const { getByText, container } = render(<Drawer />)

    const button = getByText('Open Drawer')

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()

    fireEvent.click(button)

    expect(container.querySelector('[aria-hidden="false"]')).toBeInTheDocument()
  })
  
  it('should close the drawer when clicking close button', () => {
    const { getByText, container } = render(<Drawer />)
    
    const openButton = getByText('Open Drawer')
    const closeButton = getByText('Close')

    fireEvent.click(openButton)
    fireEvent.click(closeButton)

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
  
  it('should close the drawer when clicking outside it', () => {
    const { getByText, container } = render(<Drawer />)

    const openButton = getByText('Open Drawer')

    fireEvent.click(openButton)

    // click outside drawer
    fireEvent.click(container.querySelector('.modal-backdrop'))

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('should close the drawer when pressing escape key', () => {
    const { getByText, container } = render(<Drawer />)

    const openButton = getByText('Open Drawer')

    fireEvent.click(openButton)
    fireEvent.keyDown(window, { key: 'Escape' })

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  })

})