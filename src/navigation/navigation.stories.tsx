import { useAriaNavigation } from '.';

export const Menubar = () => {
  const items = [{ title: 'Home' }, { title: 'Contact' }, { title: 'About' }];

  const { menubarProps, menuItemProps, itemProps } = useAriaNavigation({
    menubarLabel: 'Main navigation menu',
    id: 'navigation',
    menuItemsLength: items.length,
  });

  return (
    <nav>
      <ul {...menubarProps}>
        {items.map((item, idx) => (
          <li key={item.title} {...itemProps}>
            <a href="#" {...menuItemProps[idx]}>
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
