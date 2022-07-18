import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

export default function App() {
  const FIRST_BOX = {
    position: 'relative',
    zIndex: 1,
  };
  const OUTER_BOX_ON_TOP = {
    position: 'relative',
    zIndex: 2,
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="parent" style={FIRST_BOX}>
        <div className="first">
          <button onClick={() => setIsOpen(true)}>Open modal</button>
        </div>

        <Modal open={isOpen} close={() => setIsOpen(false)}>
          Children text of a Modal
        </Modal>
      </div>

      <div className="second" style={OUTER_BOX_ON_TOP}>
        OUTER CONTENT
      </div>
    </>
  );
}
