// FooterInline.js
import React from 'react';

function FooterInline() {
  const footerStyle = {
    textAlign: 'center',
     padding: '20px',
     backgroundColor: '#333',
     color: '#fff',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}

export default FooterInline;
