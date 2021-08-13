import React from 'react'
import {useAriaDrawer} from '.'

export default {
  title: 'Aria Component/Drawer'
}

export const Drawer = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const { drawerProps, closeButtonProps, contentProps} = useAriaDrawer({
    isOpen: isDrawerOpen,
    onDismiss: () => setDrawerOpen(false),
    id: "drawer",
  });
  return (
    <>
      <button className="App-link" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </button>
      <div
        className={`modal-backdrop ${
          isDrawerOpen ? "" : "modal-backdrop--closed"
        }`}
        {...drawerProps}
      >
        <div className="drawer" {...contentProps}>
          <button {...closeButtonProps}>Close</button>
        </div>
      </div>
    </>
  );
}