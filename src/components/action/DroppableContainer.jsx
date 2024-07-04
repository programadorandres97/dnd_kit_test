import React from 'react';

function DroppableContainer({ children }) {
  // Estilo del contenedor
  const style = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los elementos se envuelvan en múltiples filas
    width: '700px',
    height: '700px',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    overflow: 'auto', // Añadimos overflow auto para manejar el desbordamiento
  };

  return <div style={style}>{children}</div>; // Renderiza los elementos hijos dentro del contenedor
}

export default DroppableContainer;
