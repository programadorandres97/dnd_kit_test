import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import SortableItem from '../action/SortableItem'; // Reutiliza el componente SortableItem

function Componente1() {
  const [items, setItems] = useState(['Div 1', 'Div 2']);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#ddd' }}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Componente1;
