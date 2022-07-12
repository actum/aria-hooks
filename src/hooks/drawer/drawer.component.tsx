import React from 'react';
import Button from '../../styles/components/Button';
import { Backdrop, HiddenInfo } from '../../styles/shared';
import { StyledContainer, StyledDrawer } from './drawer.styles';
import { ModalProps, useAriaModal } from '../modal';
import { ModalReturnProps } from '../modal/types';

export const Drawer: React.FC<ModalProps> = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const { modalProps, closeButtonProps, descriptionTextProps } = useAriaModal({
    isOpen: isModalOpen,
    onDismiss: () => setModalOpen(false),
    id: 'modal-test-storybook',
  });
  return (
    <>
      <Button onClick={() => setModalOpen(true)} variation="unique">
        Open Drawer
      </Button>

      <Backdrop hidden={!isModalOpen ? true : false} className="backdrop">
        <StyledDrawer {...modalProps}>
          <div className="wrapper">
            <StyledContainer>
              <HiddenInfo {...descriptionTextProps}>A cool drawer.</HiddenInfo>
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
            <span className="sample_text">Drawer</span>
          </div>
        </StyledDrawer>
      </Backdrop>
    </>
  );
};

export const DrawerHookProps: React.FC<ModalProps> = () => null;
export const DrawerHookReturnProps: React.FC<ModalReturnProps> = () => null;
