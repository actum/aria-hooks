import React from 'react';
import { useAriaDrawer, DrawerProps } from '.';

import { Backdrop } from '../shared_styled_components';
import { StyledDrawer } from './StyledDrawer';

export const Drawer: React.FC<DrawerProps> = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const { drawerProps, closeButtonProps, contentProps } = useAriaDrawer({
    isOpen: isDrawerOpen,
    onDismiss: () => setDrawerOpen(false),
    id: 'drawer',
  });
  return (
    <>
      <button className="App-link" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </button>
      <Backdrop
        className={`${isDrawerOpen ? '' : 'modal-backdrop--closed'}`}
        {...drawerProps}
      >
        <StyledDrawer {...contentProps}>
          <button {...closeButtonProps}>Close</button>
        </StyledDrawer>
      </Backdrop>
    </>
  );
};

export default {
  title: 'Aria Component/Drawer',
  component: Drawer,
};
