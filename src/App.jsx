import React from 'react';
import './App.css';

export default function App() {
  const FIRST_BOX = {
    position: 'relative',
    zIndex: 1,
  };
  const OUTER_BOX_ON_TOP = {
    zIndex: 2,
    position: 'relative',
  };

  return (
    <>
      <div className="first" style={FIRST_BOX}>
        <button>Open modal</button>
      </div>

      <div className="second" style={OUTER_BOX_ON_TOP}>
        OUTER CONTENT
      </div>
    </>
  );
}
