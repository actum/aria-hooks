// https://github.com/focus-trap/focus-trap
// useful for modals, drawers, dialogs, etc.

import { createFocusTrap, FocusTrap } from 'focus-trap';

export const focussableElements =
  'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export class FocusTrapFactory {
  private container: HTMLElement;
  private focusTrap: FocusTrap;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  mount = (container = this.container) => {
    const firstFocusableEl = container.querySelector(
      focussableElements
    ) as HTMLElement;

    this.focusTrap = createFocusTrap(container, {
      preventScroll: true,
      fallbackFocus: firstFocusableEl,
    });

    this.focusTrap.activate();
  };

  destroy = () => this.focusTrap?.deactivate();
}
