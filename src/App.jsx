import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Contenedor from './components/layout/Contenedor';


function App() {
  const [components, setComponents] = useState([]);

  const addItem = (itemType) => {
    const newItem = {
      id: `${itemType}-${Date.now()}`,
      type: itemType
    };
    setComponents([...components, newItem]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar addItem={addItem} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Contenedor components={components} setComponents={setComponents} />
      </div>
    </div>
  );
}

export default App;
