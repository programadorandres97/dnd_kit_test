import React from 'react';

function Sidebar({ addItem }) {
  const style = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  };

  return (
    <div style={style}>
      <h2>Sidebar</h2>
      <button onClick={addItem} style={{ padding: '10px', marginTop: '20px' }}>Add Item</button>
    </div>
  );
}

export default Sidebar;
