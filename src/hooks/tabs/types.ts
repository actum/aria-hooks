import {
  ARIA_CONTROLS,
  ARIA_LABEL,
  ARIA_LABELLEDBY,
  ARIA_SELECTED,
} from '../../constants';

export interface TabsProps {
  tablistLabel?: string;
  tabsId?: string;
}

export interface TabsReturnProps {
  tabsProps: {
    id: string;
  };
  tablistProps: {
    role: string;
    [ARIA_LABEL]: string;
  };
  tabProps: (
    id: string,
    i: number
  ) => {
    role: string;
    [ARIA_SELECTED]: boolean;
    [ARIA_CONTROLS]: string;
    id: string;
    tabIndex: number;
  };
  tabpanelProps: (
    id: string,
    i: number
  ) => {
    role: string;
    [ARIA_LABELLEDBY]: string;
    tabIndex: number;
    id: string;
    style: {
      display: string;
    };
  };
}
