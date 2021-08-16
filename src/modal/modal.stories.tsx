import * as React from 'react';
import { useAriaModal } from '.';

import { HiddenInfo, Backdrop } from '../shared_styled_componets';
import { StyledModal } from './StyledModal';

export default {
  title: 'Aria Component/Modal',
};

export const Modal: React.FC = () => {
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
        <StyledModal className="modal" {...modalProps}>
          <HiddenInfo className="visually-hidden" {...descriptionSpanProps}>
            The description of the modal
          </HiddenInfo>
          <button {...closeButtonProps}>Close</button>
        </StyledModal>
      </Backdrop>
    </>
  );
};
