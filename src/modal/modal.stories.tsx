import * as React from 'react';
import { useAriaModal, ModalProps } from '.';

import { HiddenInfo, Backdrop } from '../shared_styled_components';
import styled from 'styled-components';

import Button from '../components/Button';

const StyledModal = styled.div`
  font-family: 'Roboto', sans-serif;
  background: white;
  width: 500px;
  height: 500px;
  max-height: 70vh;
  max-width: 70vw;
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
    <>
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
          <span className="ghost_text">Modal</span>
        </StyledModal>
      </Backdrop>
    </>
  );
};

export default {
  title: 'Aria Component/Modal',
  component: Modal,
};
