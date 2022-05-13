import * as React from 'react';
import { useAriaModal } from '.';
import { ModalProps, ModalReturnProps } from './types';
import { HiddenInfo, Backdrop } from '../../styles/sharedComponents';
import Button from '../../styles/components/Button';
import { ModalPanel, StyledModal } from './modal.styles';

export const Modal: React.FC<ModalProps> = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const { modalProps, closeButtonProps, descriptionTextProps } = useAriaModal({
    isOpen: isModalOpen,
    onDismiss: () => setModalOpen(false),
    id: 'modal-test-storybook',
  });

  return (
    <>
      <Button
        variation="unique"
        className="App-link"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </Button>

      <Backdrop hidden={!isModalOpen ? true : false} className="modal-backdrop">
        <StyledModal {...modalProps}>
          <HiddenInfo {...descriptionTextProps}>A cool modal.</HiddenInfo>
          <ModalPanel>
            <button {...closeButtonProps} className="modal__close-btn">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 10.586 16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636"></polygon>
              </svg>
            </button>
          </ModalPanel>
          <span className="sample_text">Modal</span>
        </StyledModal>
      </Backdrop>
    </>
  );
};

export const ModalHookProps: React.FC<ModalProps> = () => null;
export const ModalHookReturnProps: React.FC<ModalReturnProps['modalProps']> =
  () => null;
export const CloseButtonReturnProps: React.FC<
  ModalReturnProps['closeButtonProps']
> = () => null;
export const DescriptionTextReturnProps: React.FC<
  ModalReturnProps['descriptionTextProps']
> = () => null;
