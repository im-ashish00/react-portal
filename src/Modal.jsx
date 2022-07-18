import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({ open, close, children }) {
  if (!open) return null;

  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 1000,
    transform: 'translate(-50%, -50%)',
  };

  const OVERLAY = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  };

  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY} />
      <div style={MODAL_STYLE}>
        <button onClick={close}>Close Modal</button>&nbsp; {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}
