import React from 'react'

import { ARIA_EXPANDED, ARIA_HIDDEN } from '../constants'
import { FocusTrapFactory, focussableElements } from '../utils/focusTrapFactory'


const changeFocusToElement = function(element: 'next' | 'prev' | 'first' | 'last', baseElement: HTMLElement) {
  if (!document.activeElement) return

    const focussable = Array.from(baseElement.querySelectorAll(focussableElements)).filter(
      (element: HTMLElement) =>
        element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement,
    )

    let selectedElement

    if (element === 'first') {
      selectedElement = focussable.shift() as HTMLElement
    } else if (element === 'last') {
      selectedElement = focussable.pop() as HTMLElement
    } else {
      const index = focussable.indexOf(document.activeElement)

      if (index > -1) {
        selectedElement = focussable[index + (element === 'next' ? 1 : -1)] as HTMLElement
      }
    }

    if (!selectedElement) return

    selectedElement.focus()
    selectedElement.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    })
}

export class ListboxController {
  focusTrap: FocusTrapFactory
  contentElement: HTMLUListElement
  triggerElement: HTMLButtonElement

  id: string

  constructor(id: string) {
    this.id = id
  }

  setContentElement = (el: HTMLUListElement) => (this.contentElement = el)
  setTriggerElement = (el: HTMLButtonElement) => (this.triggerElement = el)

  getFocusTrap = () => {
    if (!this.focusTrap) {
      this.focusTrap = new FocusTrapFactory(this.contentElement)
    }
    return this.focusTrap
  }

  open = () => {
    this.getFocusTrap().mount()
    this.registerListeners()

    if (!this.triggerElement) {
      this.triggerElement = document
        .getElementById(this.id)
        .querySelector('[aria-haspopup=listbox]')
    }

    this.contentElement.setAttribute(ARIA_HIDDEN, 'false')
    this.triggerElement.setAttribute(ARIA_EXPANDED, 'true')

    Array.from(this.contentElement.querySelectorAll('button')).forEach(button =>
      button.removeAttribute('tab-index'),
    )
  }

  close = () => {
    this.getFocusTrap().destroy()
    this.cleanupListeners()

    const listboxElement = this.contentElement

    listboxElement.setAttribute(ARIA_HIDDEN, 'true')
    this.triggerElement.setAttribute(ARIA_EXPANDED, 'false')

    Array.from(listboxElement.querySelectorAll('button')).forEach(button =>
      button.setAttribute('tab-index', '-1'),
    )

    listboxElement.addEventListener('animationend', this.closeCleanup)
  }

  getOpen = () => {
    if (!this.triggerElement) {
      this.triggerElement = document
        .getElementById(this.id)
        .querySelector('[aria-haspopup=listbox]')
    }

    return this.triggerElement.getAttribute(ARIA_EXPANDED) === 'true'
  }

  private closeCleanup = () => {
    this.contentElement.removeEventListener('animationend', this.closeCleanup)
  }

  handleKeyDown = (onSelect?: () => void) => (ev: React.KeyboardEvent<HTMLLIElement>): void => {
    switch(ev.key) {
      case 'ArrowDown':
        ev.preventDefault()
        changeFocusToElement('next', this.contentElement)
        break

      case 'ArrowUp':
        ev.preventDefault()
        changeFocusToElement('prev', this.contentElement)
        break

      case 'Home':
        ev.preventDefault()
        changeFocusToElement('first', this.contentElement)
      
      case 'End':
        ev.preventDefault()
        changeFocusToElement('last', this.contentElement)

      case 'Enter':
      case ' ':
        ev.preventDefault()
        onSelect?.()
    }
  }

  handleButtonKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') {
      this.close()
    }
  }

  handleClick = (e: MouseEvent) => {
    if (
      !this.contentElement.contains(e.target as HTMLElement) &&
      !document.getElementById('overlays')?.contains(e.target as HTMLElement)
    ) {
      this.close()
    }
  }

  registerListeners = () => {
    window.addEventListener('keydown', this.handleButtonKeyDown)
    window.addEventListener('touchstart', this.handleClick)
    window.addEventListener('mousedown', this.handleClick)
  }

  cleanupListeners = () => {
    window.removeEventListener('keydown', this.handleButtonKeyDown)
    window.removeEventListener('touchstart', this.handleClick)
    window.removeEventListener('mousedown', this.handleClick)
  }
}
