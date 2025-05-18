
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Ingredient = {
  id: string;
  name: string;
  chineseName: string;
  icon: string;
  audio: string;
};

export type Level = {
  id: number;
  name: string;
  chineseName: string;
  requiredIngredients: string[];
  unlocked: boolean;
};

type GameContextType = {
  currentLevel: number;
  levels: Level[];
  ingredients: Ingredient[];
  selectedIngredients: string[];
  isCooking: boolean;
  isCooked: boolean;
  isLevelComplete: boolean;
  addIngredient: (ingredientId: string) => void;
  removeIngredient: (ingredientId: string) => void;
  startCooking: () => void;
  finishCooking: () => void;
  resetPizza: () => void;
  completeLevel: () => void;
  selectLevel: (levelId: number) => void;
};

const defaultIngredients: Ingredient[] = [
  { 
    id: 'dough', 
    name: 'Dough', 
    chineseName: '面团', 
    icon: 'pizza', 
    audio: 'dough.mp3' 
  },
  { 
    id: 'sauce', 
    name: 'Sauce', 
    chineseName: '酱汁', 
    icon: 'tomato', 
    audio: 'sauce.mp3' 
  },
  { 
    id: 'cheese', 
    name: 'Cheese', 
    chineseName: '奶酪', 
    icon: 'cheese', 
    audio: 'cheese.mp3' 
  },
  { 
    id: 'pepperoni', 
    name: 'Pepperoni', 
    chineseName: '辣香肠', 
    icon: 'tomato', 
    audio: 'pepperoni.mp3' 
  },
  { 
    id: 'mushroom', 
    name: 'Mushroom', 
    chineseName: '蘑菇', 
    icon: 'mushroom', 
    audio: 'mushroom.mp3' 
  },
  { 
    id: 'pepper', 
    name: 'Pepper', 
    chineseName: '辣椒', 
    icon: 'pepper', 
    audio: 'pepper.mp3' 
  },
  { 
    id: 'onion', 
    name: 'Onion', 
    chineseName: '洋葱', 
    icon: 'onion', 
    audio: 'onion.mp3' 
  }
];

const defaultLevels: Level[] = [
  {
    id: 1,
    name: 'Cheese Pizza',
    chineseName: '奶酪比萨',
    requiredIngredients: ['dough', 'sauce', 'cheese'],
    unlocked: true
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    chineseName: '辣香肠比萨',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'pepperoni'],
    unlocked: false
  },
  {
    id: 3,
    name: 'Veggie Pizza',
    chineseName: '素食比萨',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'mushroom', 'pepper', 'onion'],
    unlocked: false
  }
];

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levels, setLevels] = useState<Level[]>(defaultLevels);
  const [ingredients] = useState<Ingredient[]>(defaultIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isCooking, setIsCooking] = useState(false);
  const [isCooked, setIsCooked] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  const addIngredient = (ingredientId: string) => {
    if (!selectedIngredients.includes(ingredientId)) {
      setSelectedIngredients([...selectedIngredients, ingredientId]);
    }
  };

  const removeIngredient = (ingredientId: string) => {
    setSelectedIngredients(selectedIngredients.filter(id => id !== ingredientId));
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
    
    // Check if the pizza has all required ingredients for the current level
    const currentLevelData = levels.find(level => level.id === currentLevel);
    if (currentLevelData) {
      const hasAllRequired = currentLevelData.requiredIngredients.every(
        ingredient => selectedIngredients.includes(ingredient)
      );
      
      if (hasAllRequired) {
        setIsLevelComplete(true);
      }
    }
  };

  const resetPizza = () => {
    setSelectedIngredients([]);
    setIsCooking(false);
    setIsCooked(false);
    setIsLevelComplete(false);
  };

  const completeLevel = () => {
    // Unlock next level if available
    setLevels(prevLevels => 
      prevLevels.map(level => {
        if (level.id === currentLevel + 1) {
          return { ...level, unlocked: true };
        }
        return level;
      })
    );
    resetPizza();
  };

  const selectLevel = (levelId: number) => {
    const level = levels.find(l => l.id === levelId);
    if (level && level.unlocked) {
      setCurrentLevel(levelId);
      resetPizza();
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentLevel,
        levels,
        ingredients,
        selectedIngredients,
        isCooking,
        isCooked,
        isLevelComplete,
        addIngredient,
        removeIngredient,
        startCooking,
        finishCooking,
        resetPizza,
        completeLevel,
        selectLevel
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
