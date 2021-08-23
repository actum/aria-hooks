import React from 'react';
import { useAriaNavigation } from '.';

interface menubarProps {}

export const Menubar: React.FC<MenubarProps> = () => {
  const items = [{ title: 'Home' }, { title: 'Contact' }, { title: 'About' }];

  const { menubarProps, menuItemProps, itemProps } = useAriaNavigation({
    menubarLabel: 'Main navigation menu',
    id: 'navigation',
  });

  return (
    <nav>
      <ul {...menubarProps}>
        {items.map((item, idx) => (
          <li key={item.title} {...itemProps}>
            <a href="#" {...menuItemProps(idx)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default {
  title: 'Aria Component/Menubar',
  component: '',
};
