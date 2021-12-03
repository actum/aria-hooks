import React from 'react';
import { useAriaTabs } from '.';

import { StyledTabList, StyledTabPanel, StyledTabs } from './tabs.styles';
import { TabsProps, TabsReturnProps } from './types';
import { tabs } from './data';

export const Tabs: React.FC<TabsProps> = () => {
  const { tablistProps, tabProps, tabpanelProps, tabsProps } = useAriaTabs({});

  return (
    <StyledTabs {...tabsProps}>
      <StyledTabList {...tablistProps} className="tablist">
        {tabs.map(({ label, id }, idx) => (
          <button {...tabProps(id, idx)} key={id}>
            {label}
          </button>
        ))}
      </StyledTabList>
      {tabs.map(({ label, content, id }, idx) => (
        <StyledTabPanel
          {...tabpanelProps(id, idx)}
          key={id}
          className="tabpanel"
        >
          <h2>{label}</h2>
          <p>{content}</p>
        </StyledTabPanel>
      ))}
    </StyledTabs>
  );
};

export default Tabs;

export const TabsHookProps: React.FC<TabsProps> = () => null;
export const TabsHookReturnProps: React.FC<TabsReturnProps> = () => null;
