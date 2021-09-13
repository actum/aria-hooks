import React from 'react';
import { useAriaDrawer, DrawerProps, DrawerReturnProps } from '.';
import Button from '../components/Button';

import { Backdrop } from '../shared_styled_components';
import { StyledContainer, StyledDrawer } from './drawer.styles';

export const Drawer: React.FC<DrawerProps> = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const { drawerProps, closeButtonProps, contentProps } = useAriaDrawer({
    isOpen: isDrawerOpen,
    onDismiss: () => {
      setDrawerOpen(false);
    },
    id: 'drawer',
    closeLabel: 'Close',
  });
  return (
    <>
      <Button variation="primary" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>

      <Backdrop
        hidden={!isDrawerOpen ? true : false}
        className="backdrop"
        {...drawerProps}
      >
        <StyledDrawer {...contentProps}>
          <div className="wrapper">
            <StyledContainer>
              <button {...closeButtonProps} className="icon_btn">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 10.586 16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636"></polygon>
                </svg>
              </button>
            </StyledContainer>
            <span className="ghost_text">Drawer</span>
          </div>
        </StyledDrawer>
      </Backdrop>
    </>
  );
};

export const DrawerHookProps: React.FC<DrawerProps> = () => null;
export const DrawerHookReturnProps: React.FC<DrawerReturnProps> = () => null;
