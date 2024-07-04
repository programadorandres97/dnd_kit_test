import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Componente1 from '../components_page/Componente1';
import Componente2 from '../components_page/Componente2';
import SortableContainerItem from '../action/SortableContainerItem';

function Contenedor({ components, setComponents }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setComponents((components) => {
        const oldIndex = components.findIndex(item => item.id === active.id);
        const newIndex = components.findIndex(item => item.id === over.id);
        return arrayMove(components, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={components} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
          {components.map((component) => (
            <SortableContainerItem key={component.id} id={component.id}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                {component.type === 'Componente1' ? (
                  <Componente1 />
                ) : (
                  <Componente2 />
                )}
              </div>
            </SortableContainerItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Contenedor;
