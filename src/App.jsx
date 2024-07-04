import React from 'react';
import Sidebar from './components/Sidebar'; // Importa el componente Sidebar
import Contenedor from './components/Contenedor'; // Importa el componente Contenedor

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
