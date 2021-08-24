import React from 'react';
import { useAriaDrawer, DrawerProps } from '.';

import { Backdrop } from '../shared_styled_components';
import styled from 'styled-components';

const StyledDrawer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  width: 400px;
`;

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
        className={`modal-backdrop ${
          isDrawerOpen ? '' : 'modal-backdrop--closed'
        }`}
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
