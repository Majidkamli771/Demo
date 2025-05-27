

import React, { useState } from 'react';
import NavbarInline from './nav';
import FooterInline from './footer';
export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1); // ✅ Fix: count decrease kare
  };

  // Inline style for centering
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // full screen height
    backgroundColor: '#f0f0f0',
  };

  return (
    <div>
        <NavbarInline/>
 <div style={containerStyle}>
    
      <h1>Counter App</h1>
      <p>Count = {count}</p>
      <div>
        <button onClick={increase} style={{ marginRight: '10px' }}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>

    </div>
    <FooterInline/>
    </div>
   
  );
}

