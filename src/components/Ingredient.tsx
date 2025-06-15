
import React from 'react';
import { useGame, Ingredient as IngredientType } from '@/context/GameContext';
import { pronunciationAudio } from '@/utils/audioHelper';
import { useDrag } from 'react-dnd';
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

type IngredientProps = {
  ingredient: IngredientType;
  isSelected: boolean;
};

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

const Ingredient: React.FC<IngredientProps> = ({ ingredient, isSelected }) => {
  const { isCooking, isCooked } = useGame();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ingredient',
    item: { id: ingredient.id },
    canDrag: !isCooking && !isCooked,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  const handleClick = () => {
    pronunciationAudio(ingredient.id);
  };

  const canInteract = !isCooking && !isCooked;

  return (
    <div 
      ref={drag}
      className={`flex flex-col items-center p-3 rounded-lg ${canInteract ? 'cursor-grab' : 'cursor-not-allowed'} transition-all duration-300
                 ${isSelected ? 'bg-green-200 scale-105' : 'bg-white hover:bg-gray-100'}`}
      style={{ opacity: isDragging ? 0.4 : 1 }}
      onClick={canInteract ? handleClick : undefined}
    >
      <div className="mb-2 text-2xl">
        {iconComponents[ingredient.icon] || <div className="w-10 h-10 bg-gray-300 rounded-full" />}
      </div>
      <div className="text-lg font-bold">{ingredient.chineseName}</div>
      <div className="text-sm text-gray-600">{ingredient.name}</div>
    </div>
  );
};

export default Ingredient;
