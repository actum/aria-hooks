import React from 'react';
import { ARIA_EXPANDED, ARIA_HIDDEN, ARIA_SELECTED } from '../../constants';

export const SELECTED_CLASS_NAME = 'selected';

const changeFocusToElement = function (
  element: 'next' | 'prev' | 'first' | 'last' | number,
  baseElement: HTMLElement
) {
  if (!document.activeElement) return;

  const focussable = Array.from(
    baseElement.querySelectorAll('[role="option"]')
  );

  let selectedElement: HTMLElement;

  if (element === 'first') {
    selectedElement = focussable.shift() as HTMLElement;
  } else if (element === 'last') {
    selectedElement = focussable.pop() as HTMLElement;
  } else if (typeof element === 'number') {
    selectedElement = focussable[element] as HTMLElement;
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

  selectedElement.classList.add(SELECTED_CLASS_NAME);

  if (
    Math.abs(
      selectedElement.parentElement.scrollHeight -
        selectedElement.parentElement.clientHeight
    ) > 5
  ) {
    selectedElement.scrollIntoView?.();
  }
};

export class ListboxController {
  contentElement?: HTMLUListElement;
  triggerElement?: HTMLButtonElement;

  id: string;

  private firstLetters: { item: HTMLElement; firstLetter: string }[];

  constructor(id: string) {
    this.id = id;
  }

  setContentElement = (el: HTMLUListElement) => (this.contentElement = el);
  setTriggerElement = (el: HTMLButtonElement) => (this.triggerElement = el);

  setFirstLetters = () => {
    const optionElements = Array.from(
      this.contentElement.querySelectorAll('[role="option"]')
    ) as HTMLElement[];

    this.firstLetters = optionElements.map((option) => ({
      item: option,
      firstLetter: option.innerText[0].toLowerCase(),
    }));
  };

  getItemIndex = (testedItem: HTMLElement) => {
    if (this.contentElement === undefined) return -1;

    const optionElements = Array.from(
      this.contentElement.querySelectorAll('[role="option"]')
    ) as HTMLElement[];

    return optionElements
      ? optionElements.findIndex((option) => option.isSameNode(testedItem))
      : -1;
  };

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
      this.contentElement.querySelector('[role="option"]');

    if (
      Math.abs(
        selected?.parentElement.scrollHeight -
          selected?.parentElement.clientHeight
      ) > 5
    ) {
      selected?.scrollIntoView?.();
    }
    selected?.classList.add(SELECTED_CLASS_NAME);
  };

  close = () => {
    this.cleanupListeners();

    const listboxElement = this.contentElement;

    listboxElement.setAttribute(ARIA_HIDDEN, 'true');
    this.triggerElement.setAttribute(ARIA_EXPANDED, 'false');

    Array.from(listboxElement.querySelectorAll('[role="option"]')).forEach(
      (button) => button.classList.remove(SELECTED_CLASS_NAME)
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
        case ' ': {
          ev.preventDefault();
          Array.from(
            this.contentElement.querySelectorAll('[role="option"]')
          ).forEach((button) => button.setAttribute(ARIA_SELECTED, 'false'));

          onSelect?.(
            this.contentElement.querySelector(`.${SELECTED_CLASS_NAME}`)?.id
          );

          break;
        }
      }
      // "Custom switch" for letters
      for (const { firstLetter, item } of this.firstLetters) {
        if (ev.key === firstLetter) {
          const index = this.getItemIndex(item);

          ev.preventDefault();
          changeFocusToElement(index, this.contentElement);
          break;
        }
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

    this.setFirstLetters();
  };

  cleanupListeners = () => {
    window.removeEventListener('keydown', this.handleButtonKeyDown);
    window.removeEventListener('touchstart', this.handleClick);
    window.removeEventListener('mousedown', this.handleClick);
  };
}
