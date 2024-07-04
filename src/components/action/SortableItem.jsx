import React from 'react';
import { useSortable } from '@dnd-kit/sortable'; // Hook para hacer que el componente sea sortable (ordenable)
import { CSS } from '@dnd-kit/utilities'; // Utilidad para manejar transformaciones CSS

function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  // Estilo del componente
  const style = {
    transform: CSS.Transform.toString(transform), // Aplica la transformación al elemento cuando se arrastra
    transition,
    width: '100px', // Ajusta el ancho al tamaño deseado
    height: '100px',
    backgroundColor: 'darkblue',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px', // Ajusta el margen para que no se desborde
    userSelect: 'none', // Evita que el texto sea seleccionable durante el arrastre
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id} {/* Muestra el ID del elemento */}
    </div>
  );
}

export default SortableItem;
