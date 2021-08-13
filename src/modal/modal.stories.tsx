import * as React from "react";
import { useAriaModal } from '.'

export default {
  title: 'Aria Component/Modal'
}

export const Modal: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const { modalProps, closeButtonProps, descriptionSpanProps } = useAriaModal({
    isOpen: isModalOpen,
    onDismiss: () => setModalOpen(false),
    description: "A cool modal",
    id: 'modal-test-storybook'
  });

  return (
    <>
      <button className="App-link" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      <div
        className={`modal-backdrop ${
          isModalOpen ? "" : "modal-backdrop--closed"
        }`}
      >
        <div className="modal" {...modalProps}>
          <span className="visually-hidden" {...descriptionSpanProps}>
            The description of the modal
          </span>
          <button {...closeButtonProps}>Close</button>
        </div>
      </div>
    </>
  );
}