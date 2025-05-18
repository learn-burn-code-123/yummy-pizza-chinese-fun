
import React from 'react';
import { useGame } from '@/context/GameContext';
import Ingredient from './Ingredient';

const IngredientsSelector: React.FC = () => {
  const { 
    ingredients, 
    selectedIngredients, 
    addIngredient, 
    levels, 
    currentLevel,
    isCooking,
    isCooked
  } = useGame();

  // Get available ingredients for current level
  const currentLevelData = levels.find(level => level.id === currentLevel);
  const availableIngredients = ingredients.filter(ingredient => 
    currentLevelData?.requiredIngredients.includes(ingredient.id)
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3 text-center">选择配料</h2> {/* "Select Ingredients" in Chinese */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            onSelect={() => !isCooking && !isCooked && addIngredient(ingredient.id)}
            isSelected={selectedIngredients.includes(ingredient.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientsSelector;
