import React from 'react';
import { useAriaDrawer } from '.';

import { Backdrop } from '../shared_styled_componets';
import { StyledDrawer } from './StyledDrawer';

export default {
  title: 'Aria Component/Drawer',
};

export const Drawer = () => {
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
        className={`modal-backdrop ${
          isDrawerOpen ? '' : 'modal-backdrop--closed'
        }`}
        {...drawerProps}
      >
        <StyledDrawer className="drawer" {...contentProps}>
          <button {...closeButtonProps}>Close</button>
        </StyledDrawer>
      </Backdrop>
    </>
  );
};
