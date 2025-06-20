import { useState } from 'react';
import { defaultLevels, defaultIngredients } from '@/data/gameData';
import { playErrorSound } from '@/utils/audioHelper';
import { Level, Ingredient, GameContextType } from '@/types/game';

export const useGameLogic = (): GameContextType => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levels, setLevels] = useState<Level[]>(defaultLevels);
  const [ingredients] = useState<Ingredient[]>(defaultIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['dough']);
  const [isCooking, setIsCooking] = useState(false);
  const [isCooked, setIsCooked] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isPizzaFailed, setIsPizzaFailed] = useState(false);

  const addIngredient = (ingredientId: string) => {
    setSelectedIngredients(prevIngredients => {
      if (!prevIngredients.includes(ingredientId)) {
        return [...prevIngredients, ingredientId];
      }
      return prevIngredients;
    });
  };

  const removeIngredient = (ingredientId: string) => {
    setSelectedIngredients(prevIngredients => prevIngredients.filter(id => id !== ingredientId));
  };

  const startCooking = () => {
    setIsCooking(true);
    // Check if all required ingredients are added
    setTimeout(() => {
      finishCooking();
    }, 3000);
  };

  const finishCooking = () => {
    setIsCooking(false);
    setIsCooked(true);
    setIsLevelComplete(true);
    setIsPizzaFailed(false);
  };

  const resetPizza = () => {
    setSelectedIngredients(['dough']);
    setIsCooking(false);
    setIsCooked(false);
    setIsLevelComplete(false);
    setIsPizzaFailed(false);
  };

  const completeLevel = () => {
    // Unlock next level if available and move to it
    const nextLevelId = currentLevel + 1;
    const nextLevel = levels.find(l => l.id === nextLevelId);

    if (nextLevel) {
      setLevels(prevLevels =>
        prevLevels.map(level => {
          if (level.id === nextLevelId) {
            return { ...level, unlocked: true };
          }
          return level;
        })
      );
      setCurrentLevel(nextLevelId);
    } else {
      // This is the last level, go back to level 1
      setCurrentLevel(1);
    }

    resetPizza();
  };

  const selectLevel = (levelId: number) => {
    const level = levels.find(l => l.id === levelId);
    if (level && level.unlocked) {
      setCurrentLevel(levelId);
      resetPizza();
    }
  };

  return {
    currentLevel,
    levels,
    ingredients,
    selectedIngredients,
    isCooking,
    isCooked,
    isLevelComplete,
    isPizzaFailed,
    addIngredient,
    removeIngredient,
    startCooking,
    finishCooking,
    resetPizza,
    completeLevel,
    selectLevel
  };
};
