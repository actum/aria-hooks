import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { useAriaListbox } from '.'
import { ARIA_HIDDEN } from '../constants'
import { Listbox } from './listbox.stories'

describe('Tests for useAriaListbox', () => {
  it('should render a triggering button for the listbox', () => {
    const { getByText } = render(<Listbox {...{} as any} />)

    expect(getByText('Select option')).toBeInTheDocument()
  })
  
  it('should open the listbox when trigger is clicked', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    const listbox = container.querySelector('.listbox')

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('true')

    fireEvent.click(button)

    expect(listbox.attributes[ARIA_HIDDEN]?.value).toBe('false')
  })
  
  it('should focus the next item when pressing down arrow', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })

  it('should focus the previous item when pressing up arrow', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })
  
  it('should focus the last item when pressing end', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })
  
  it('should focus the first item when pressing home', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })
  
  it('should select value when pressing return', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })
  
  it('should select value clicking entry', () => {
    const { getByText, container } = render(<Listbox {...{} as any} />)

    const button = getByText('Select option')
    fireEvent.click(button)
    

  })
})
