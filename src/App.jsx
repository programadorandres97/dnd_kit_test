import React from 'react';
import Sidebar from './components/layout/Sidebar'; // Importa el componente Sidebar
import Contenedor from './components/layout/Contenedor'; // Importa el componente Contenedor

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar /> {/* Incluye el Sidebar */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Contenedor /> {/* Incluye Contenedor */}
      </div>
    </div>
  );
}

export default App;
