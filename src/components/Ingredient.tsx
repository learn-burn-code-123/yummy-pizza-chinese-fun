
import React from 'react';
import { useGame, Ingredient as IngredientType } from '@/context/GameContext';
import { pronunciationAudio } from '@/utils/audioHelper';
import { Pizza, Cheese, Tomato, Mushroom, Pepper, Onion } from 'lucide-react';

type IngredientProps = {
  ingredient: IngredientType;
  onSelect: () => void;
  isSelected: boolean;
};

const iconComponents: Record<string, React.ReactNode> = {
  pizza: <Pizza size={40} />,
  cheese: <Cheese size={40} />,
  tomato: <Tomato size={40} />,
  mushroom: <Mushroom size={40} />,
  pepper: <Pepper size={40} />,
  onion: <Onion size={40} />,
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
