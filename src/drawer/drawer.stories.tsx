import React from 'react';
import { useAriaDrawer, DrawerProps } from '.';
import Button from '../components/Button';

import { Backdrop } from '../shared_styled_components';
import styled from 'styled-components';

const StyledDrawer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  width: 50%;
  max-width: 400px;
  padding: 20px;
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .ghost_text {
    font-size: 32px;
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8px;
  border-bottom: 1px solid #dbdbdb;
  .icon_btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export const Drawer: React.FC<DrawerProps> = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const { drawerProps, closeButtonProps, contentProps } = useAriaDrawer({
    isOpen: isDrawerOpen,
    onDismiss: () => {
      setDrawerOpen(false);
    },
    id: 'drawer',
  });
  return (
    <>
      <Button variation="primary" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Backdrop hidden={!isDrawerOpen ? true : false} {...drawerProps}>
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

export default {
  title: 'Aria Component/Drawer',
  component: Drawer,
};
