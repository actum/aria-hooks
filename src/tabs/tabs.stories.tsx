import React from 'react';
import { useAriaTabs, TabsProps } from '.';

import { StyledTabs } from './tabs.styles';

const tabs = [
  {
    label: 'Tab 1',
    id: '1',
    content:
      'Eveniet, aut iste qui eum a maiores veniam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',
  },
  {
    label: 'Tab 2',
    id: '2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut iste qui eum a maiores veniam laborum provident ipsam vitae?',
  },
  {
    label: 'Tab 3',
    id: '3',
    content:
      'Upsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae dolore laudantium aliquam natus iste obcaecati autem. Quam, nisi laboriosam!',
  },
];

export const Tabs: React.FC<TabsProps> = () => {
  const { tablistProps, tabProps, tabpanelProps, tabsProps } = useAriaTabs({});

  return (
    <StyledTabs {...tabsProps}>
      <div {...tablistProps} className="tablist">
        {tabs.map(({ label, id }, idx) => (
          <button {...tabProps(id, idx)} key={id}>
            {label}
          </button>
        ))}
      </div>
      {tabs.map(({ label, content, id }, idx) => (
        <div {...tabpanelProps(id, idx)} key={id} className="tabpanel">
          <h2>{label}</h2>
          <p>{content}</p>
        </div>
      ))}
    </StyledTabs>
  );
};

export default {
  title: 'Aria Component/Tabs',
  component: Tabs,
};
