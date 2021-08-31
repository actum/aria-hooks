import React from 'react';

import {
  ARIA_EXPANDED,
  ARIA_HIDDEN,
  ARIA_SELECTED,
  TAB_INDEX,
} from '../constants';

const SELECTED_CLASS_NAME = 'selected';

const changeFocusToElement = function (
  element: 'next' | 'prev' | 'first' | 'last',
  baseElement: HTMLElement
) {
  if (!document.activeElement) return;

  const focussable = Array.from(
    baseElement.querySelectorAll('[role="option"]')
  ).filter(
    (element: HTMLElement) =>
      element.offsetWidth > 0 ||
      element.offsetHeight > 0 ||
      element === document.activeElement
  );

  let selectedElement;

  if (element === 'first') {
    selectedElement = focussable.shift() as HTMLElement;
  } else if (element === 'last') {
    selectedElement = focussable.pop() as HTMLElement;
  } else {
    const el = baseElement.querySelector(`.${SELECTED_CLASS_NAME}`);
    const index = focussable.findIndex((e) => el.isSameNode(e));

    if (index > -1) {
      selectedElement = focussable[
        index + (element === 'next' ? 1 : -1)
      ] as HTMLElement;
    }
  }

  if (!selectedElement) return;

  focussable.forEach((button) => {
    button.classList.remove(SELECTED_CLASS_NAME);
  });

  // selectedElement.focus();
  selectedElement.classList.add(SELECTED_CLASS_NAME);
  selectedElement.scrollIntoView();
};

export class ListboxController {
  contentElement?: HTMLUListElement;
  triggerElement?: HTMLButtonElement;

  id: string;

  constructor(id: string) {
    this.id = id;
  }

  setContentElement = (el: HTMLUListElement) => (this.contentElement = el);
  setTriggerElement = (el: HTMLButtonElement) => (this.triggerElement = el);

  open = () => {
    const options = Array.from(
      this.contentElement.querySelectorAll('[role="option"]')
    );
    options.forEach((button) => {
      button.classList.remove(SELECTED_CLASS_NAME);
    });

    this.registerListeners();

    if (!this.triggerElement) {
      this.triggerElement = document
        .getElementById(this.id)
        .querySelector('[aria-haspopup=listbox]');
    }

    this.contentElement.setAttribute(ARIA_HIDDEN, 'false');
    this.contentElement.focus();
    this.triggerElement.setAttribute(ARIA_EXPANDED, 'true');

    const selected =
      this.contentElement.querySelector(`[${ARIA_SELECTED}="true"]`) ||
      Array.from(
        this.contentElement.querySelectorAll('[role="option"]')
      ).shift();

    selected?.scrollIntoView();
    selected?.classList.add(SELECTED_CLASS_NAME);
  };

  close = () => {
    this.cleanupListeners();

    const listboxElement = this.contentElement;

    listboxElement.setAttribute(ARIA_HIDDEN, 'true');
    this.triggerElement.setAttribute(ARIA_EXPANDED, 'false');

    Array.from(listboxElement.querySelectorAll('[role="option"]')).forEach(
      (button) => button.setAttribute(TAB_INDEX, '-1')
    );

    this.triggerElement.focus();
  };

  getOpen = () => {
    if (!this.triggerElement) {
      this.triggerElement = document
        .getElementById(this.id)
        ?.querySelector('[aria-haspopup=listbox]');
    }

    return this.triggerElement?.getAttribute(ARIA_EXPANDED) === 'true' || false;
  };

  handleKeyDown =
    (onSelect?: (id: string) => void) =>
    (ev: React.KeyboardEvent<HTMLUListElement>): void => {
      switch (ev.key) {
        case 'ArrowDown':
          ev.preventDefault();
          changeFocusToElement('next', this.contentElement);
          break;

        case 'ArrowUp':
          ev.preventDefault();
          changeFocusToElement('prev', this.contentElement);
          break;

        case 'Home':
          ev.preventDefault();
          changeFocusToElement('first', this.contentElement);
          break;

        case 'End':
          ev.preventDefault();
          changeFocusToElement('last', this.contentElement);
          break;

        case 'Enter':
        case ' ':
          ev.preventDefault();
          Array.from(
            this.contentElement.querySelectorAll('[role="option"]')
          ).forEach((button) => button.setAttribute(ARIA_SELECTED, 'false'));

          onSelect?.(
            this.contentElement.querySelector(`.${SELECTED_CLASS_NAME}`)?.id
          );

          break;
      }
    };

  select = (id: string) => {
    Array.from(this.contentElement.querySelectorAll('[role="option"]')).forEach(
      (button) => button.setAttribute(ARIA_SELECTED, 'false')
    );

    this.contentElement
      .querySelector(`#${id}`)
      ?.setAttribute(ARIA_SELECTED, 'true');
  };

  handleButtonKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') {
      this.close();
    }
  };

  handleClick = (e: MouseEvent) => {
    if (
      !this.contentElement.contains(e.target as HTMLElement) &&
      !document.getElementById('overlays')?.contains(e.target as HTMLElement)
    ) {
      this.close();
    }
  };

  registerListeners = () => {
    window.addEventListener('keydown', this.handleButtonKeyDown);
    window.addEventListener('touchstart', this.handleClick);
    window.addEventListener('mousedown', this.handleClick);
  };

  cleanupListeners = () => {
    window.removeEventListener('keydown', this.handleButtonKeyDown);
    window.removeEventListener('touchstart', this.handleClick);
    window.removeEventListener('mousedown', this.handleClick);
  };
}
