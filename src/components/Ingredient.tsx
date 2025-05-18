
import React from 'react';
import { useGame, Ingredient as IngredientType } from '@/context/GameContext';
import { pronunciationAudio } from '@/utils/audioHelper';
import { 
  Pizza, 
  Salad, 
  CircleSlash, 
  CircleDashed, 
  CircleDot,
  Banana,
  Cherry,
  Ham,
  Fish,
  Carrot,
  Egg,
  Apple
} from 'lucide-react';

type IngredientProps = {
  ingredient: IngredientType;
  onSelect: () => void;
  isSelected: boolean;
};

const iconComponents: Record<string, React.ReactNode> = {
  pizza: <Pizza size={40} />,
  cheese: <CircleDashed size={40} color="#FFD700" />,
  tomato: <CircleDot size={40} color="#FF6347" />,
  mushroom: <Salad size={40} color="#8B4513" />,
  pepper: <CircleSlash size={40} color="#228B22" />,
  onion: <CircleDot size={40} color="#a78bfa" />,
  pineapple: <Banana size={40} color="#FFFF00" />,
  cherry: <Cherry size={40} color="#800000" />,
  ham: <Ham size={40} color="#FFA07A" />,
  fish: <Fish size={40} color="#FFE4B5" />,
  carrot: <Carrot size={40} color="#FFA500" />,
  'leafy-green': <Salad size={40} color="#006400" />,
  banana: <Banana size={40} color="#FFD700" />,
  garlic: <CircleDot size={40} color="#F5F5DC" />,
  basil: <Salad size={40} color="#008000" />,
  corn: <Egg size={40} color="#FFFF00" />,
  broccoli: <Salad size={40} color="#228B22" />,
  spinach: <Salad size={40} color="#355E3B" />,
  chicken: <Fish size={40} color="#F5DEB3" />,
  bacon: <Ham size={40} color="#FF7F50" />,
  olives: <Cherry size={40} color="#2F4F4F" />
};

const Ingredient: React.FC<IngredientProps> = ({ ingredient, onSelect, isSelected }) => {
  const handleClick = () => {
    pronunciationAudio(ingredient.id);
    onSelect();
  };

  return (
    <div 
      className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-300
                 ${isSelected ? 'bg-green-200 scale-105' : 'bg-white hover:bg-gray-100'}`}
      onClick={handleClick}
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
