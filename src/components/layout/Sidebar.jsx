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
      <button onClick={() => addItem('Componente1')} style={{ padding: '10px', marginTop: '20px' }}>Add Componente 1</button>
      <button onClick={() => addItem('Componente2')} style={{ padding: '10px', marginTop: '20px' }}>Add Componente 2</button>
    </div>
  );
}

export default Sidebar;
