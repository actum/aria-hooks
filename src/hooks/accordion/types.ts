import { ARIA_CONTROLS, ARIA_EXPANDED, ARIA_LABELLEDBY } from '../../constants';

export interface AccordionProps {
  id: string;
}

export interface AccordionReturnProps {
  id: string;
  ref: (accordion: HTMLElement | null) => void;
}

export interface ButtonReturnProps {
  id: string;
  /**
   * Selector for internal manipulation
   */
  'data-class': string;
  [ARIA_EXPANDED]: boolean;
  [ARIA_CONTROLS]: string;
}

export interface PanelReturnProps {
  id: string;
  [ARIA_LABELLEDBY]: string;
  style: {
    display: 'block' | 'none';
  };
}

export interface AccordionHookReturnProps {
  accordionProps: AccordionReturnProps;
  buttonProps: (id: string, expandedByDefault?: boolean) => ButtonReturnProps;
  panelProps: (id: string, isOpenByDefault: boolean) => PanelReturnProps;
}
