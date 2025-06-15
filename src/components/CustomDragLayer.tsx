
import React from 'react';
import { useDragLayer } from 'react-dnd';
import { Ingredient as IngredientType } from '@/types/game';
import { 
  Pizza, 
  Salad, 
  CircleSlash, 
  CircleDashed, 
  CircleDot,
  Ham,
  Egg,
  Droplet,
  Beef,
  Citrus,
  Circle,
  Drumstick,
} from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  pizza: <Pizza size={40} />, // for dough
  sauce: <Droplet size={40} color="#cc6666" />,
  cheese: <CircleDashed size={40} color="#FFD700" />,
  pepperoni: <Beef size={40} color="#c04e4e" />,
  mushroom: <Salad size={40} color="#8B4513" />,
  pepper: <CircleSlash size={40} color="#228B22" />,
  onion: <CircleDot size={40} color="#a78bfa" />,
  pineapple: <Citrus size={40} color="#facc15" />,
  olives: <Circle size={40} fill="black" stroke="black" />,
  bacon: <Ham size={40} color="#e57373" />,
  ham: <Ham size={40} color="#FFA07A" />,
  chicken: <Drumstick size={40} color="#F5DEB3" />,
  'leafy-green': <Salad size={40} color="#006400" />,
  corn: <Egg size={40} color="#FFFF00" />,
  garlic: <CircleDot size={40} color="#F5F5DC" />,
};

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(
  initialOffset: { x: number; y: number } | null,
  currentOffset: { x: number; y: number } | null,
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer: React.FC = () => {
  const { item, itemType, isDragging, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem() as IngredientType,
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function renderItem() {
    if (itemType !== 'ingredient' || !item) {
      return null;
    }

    return (
        <div className="flex flex-col items-center p-3 rounded-lg bg-green-200 scale-105 shadow-lg">
            <div className="mb-2 text-2xl">
                {iconComponents[item.icon] || <div className="w-10 h-10 bg-gray-300 rounded-full" />}
            </div>
            <div className="text-lg font-bold">{item.chineseName}</div>
            <div className="text-sm text-gray-600">{item.name}</div>
        </div>
    );
  }

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};

export default CustomDragLayer;
