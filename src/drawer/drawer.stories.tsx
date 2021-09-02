import React from 'react';
import { useAriaDrawer, DrawerProps } from '.';
import Button from '../components/Button';

import { Backdrop, UniqueBtn, PrimaryBtn } from '../shared_styled_components';
import { theme } from '../shared_styled_components/theme';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

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
    <ThemeProvider theme={theme}>
      <Button variation="primary" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Backdrop hidden={!isDrawerOpen ? true : false} {...drawerProps}>
        <StyledDrawer {...contentProps}>
          <div className="wrapper">
            <StyledContainer>
              <button {...closeButtonProps} className="icon_btn">
                <span className="icon">X</span>
              </button>
            </StyledContainer>
            <span className="ghost_text">Drawer</span>
          </div>
        </StyledDrawer>
      </Backdrop>
    </ThemeProvider>
  );
};

export default {
  title: 'Aria Component/Drawer',
  component: Drawer,
};
