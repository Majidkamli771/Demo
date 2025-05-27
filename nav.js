// NavbarInline.js
import React from 'react';

function NavbarInline() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
     backgroundColor: '#333',
    color: '#fff',
  };

   const linkStyle = {
    margin: '0 10px',
  color: '#fff',
   textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <h2>Webech Software Labs</h2>

        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contact</a>
    
    </nav>
  );
}
export default NavbarInline;
