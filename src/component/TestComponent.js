import React, { useState, useRef } from 'react';

const TestComponent = () => {
  const myRef = useRef(null);
  const [state, setState] = useState('Test State');

  return (
    <div ref={myRef}>
      {state}
    </div>
  );
};

export default TestComponent;
