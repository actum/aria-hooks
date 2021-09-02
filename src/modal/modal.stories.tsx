import * as React from 'react';
import { useAriaModal, ModalProps } from '.';

import { HiddenInfo, Backdrop } from '../shared_styled_components';
import styled from 'styled-components';
import { theme } from '../shared_styled_components/theme';
import { ThemeProvider } from 'styled-components';

import Button from '../components/Button';

const StyledModal = styled.div`
  font-family: 'Roboto', sans-serif;
  background: white;
  width: 50vw;
  height: 50vw;
  max-width: 500px;
  max-height: 500px;
  padding: 20px;
  position: relative;
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

export const Modal: React.FC<ModalProps> = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const { modalProps, closeButtonProps, descriptionSpanProps } = useAriaModal({
    isOpen: isModalOpen,
    onDismiss: () => setModalOpen(false),
    description: 'A cool modal',
    id: 'modal-test-storybook',
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variation="primary"
        className="App-link"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </Button>

      <Backdrop hidden={!isModalOpen ? true : false}>
        <StyledModal {...modalProps}>
          <HiddenInfo {...descriptionSpanProps}>
            The description of the modal
          </HiddenInfo>
          <StyledContainer>
            <button {...closeButtonProps} className="icon_btn">
              <span className="icon">X</span>
            </button>
          </StyledContainer>
          <span className="ghost_text">Modal</span>
        </StyledModal>
      </Backdrop>
    </ThemeProvider>
  );
};

export default {
  title: 'Aria Component/Modal',
  component: Modal,
};
