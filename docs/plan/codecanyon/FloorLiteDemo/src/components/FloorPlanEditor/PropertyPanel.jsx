import React from 'react'
import { useAppStore } from '@/store/app'
import { HiOutlineTrash } from 'react-icons/hi';

const findElement = (id, plan) => {
  // In future pass activeElement type on selection to reduce this search
  const element = plan.items.find(e => e.id === id);
  if (element) return { object: element, type: 'item' };
  
  const wall = plan.walls.find(e => e.id === id);
  if (wall) return { object: wall, type: 'wall' };
  
  return { object: null, type: null };
};

const PropertyPanel = ({plan, removeItem, removeWalls}) => {
  // Get active element
  const activeElement = useAppStore(state => state.activeElement)
  const setEditorProp = useAppStore((state) => state.setEditorProp)

  // Do not show property panel if there is no active element 
  if(activeElement === null) return

  // Get element object and its properties
  const element = findElement(activeElement, plan)

  const deleteByType = {
    wall: (id) => removeWalls(id),
    item: (id) => removeItem(id),
  };

  const handleDelete = () => {
    const { type, object } = element;
    deleteByType[type](object.id)

    // Reset activeelement
    setEditorProp('activeElement', null)
    setEditorProp('textEditing', false)
  }

  return (
    <div className='absolute right-6 top-1/2 -translate-y-1/2'>
      <div className='bg-white p-1 shadow-md rounded-md'>
        <button className='bg-red-400 p-1.5 rounded-md hover:bg-red-500 text-white' onClick={handleDelete} >
          <HiOutlineTrash  size={16}/>
        </button>
        
      </div>
    </div>
  )
}

export default PropertyPanel