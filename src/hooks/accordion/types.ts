import { ARIA_CONTROLS, ARIA_EXPANDED, ARIA_LABELLEDBY } from '../../constants';

export interface AccordionProps {
  id: string;
}

export interface AccordionReturnProps {
  accordionProps: {
    /**
     * Unique identifier to the accordion instance
     */
    id: string;
  };
  buttonProps: (
    id: string,
    /**
     * Whether or not button is expanded(panel opened) by default.
     */
    expandedByDefault?: boolean
  ) => {
    id: string;
    className: string;
    [ARIA_EXPANDED]: boolean;
    [ARIA_CONTROLS]: string;
  };
  panelProps: (
    id: string,
    isOpenByDefault: boolean
  ) => {
    id: string;
    className: string;
    [ARIA_LABELLEDBY]: string;
    style: {
      display: string;
    };
  };
}
