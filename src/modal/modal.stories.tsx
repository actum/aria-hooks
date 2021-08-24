import * as React from 'react';
import { useAriaModal, ModalProps } from '.';

import { HiddenInfo, Backdrop } from '../shared_styled_components';
import styled from 'styled-components';

const StyledModal = styled.div`
  background: white;
  width: 50%;
  height: 60%;
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
      <button className="App-link" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      <Backdrop
        className={`modal-backdrop ${
          isModalOpen ? '' : 'modal-backdrop--closed'
        }`}
      >
        <StyledModal {...modalProps}>
          <HiddenInfo {...descriptionSpanProps}>
            The description of the modal
          </HiddenInfo>
          <button {...closeButtonProps}>Close</button>
        </StyledModal>
      </Backdrop>
    </>
  );
};

export default {
  title: 'Aria Component/Modal',
  component: Modal,
};
