import React from 'react';
import { Button } from 'primereact/button';

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
      <button onClick={() => addItem('Componente1')} className='p-2 border border-green-600 hover:bg-white hover:text-black mt-5'>Add Componente 1</button>
      <button onClick={() => addItem('Componente2')} className='p-2 border border-blue-600 hover:bg-white hover:text-black mt-5'>Add Componente 2</button>
      <button onClick={() => addItem('Componente2')} className='p-2 border border-red-600 hover:bg-white hover:text-black mt-5'>Add Componente 2</button>

      {/* componente de prime react */}
      <Button className='p-2 rounded border border-blue-400 hover:bg-white hover:text-black mt-5' label="Check" icon="pi pi-check" />
    </div>
  );
}

export default Sidebar;
