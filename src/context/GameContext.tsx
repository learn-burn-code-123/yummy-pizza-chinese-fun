import React, { createContext, useState, useContext, ReactNode } from 'react';
import { playErrorSound } from '@/utils/audioHelper';

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
  isPizzaFailed: boolean;
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
    icon: 'sauce', 
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
    icon: 'pepperoni', 
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
  },
  { 
    id: 'pineapple', 
    name: 'Pineapple', 
    chineseName: '菠萝', 
    icon: 'pineapple', 
    audio: 'pineapple.mp3' 
  },
  { 
    id: 'olives', 
    name: 'Olives', 
    chineseName: '橄榄', 
    icon: 'olives', 
    audio: 'olives.mp3' 
  },
  { 
    id: 'bacon', 
    name: 'Bacon', 
    chineseName: '培根', 
    icon: 'bacon', 
    audio: 'bacon.mp3' 
  },
  { 
    id: 'ham', 
    name: 'Ham', 
    chineseName: '火腿', 
    icon: 'ham', 
    audio: 'ham.mp3' 
  },
  { 
    id: 'chicken', 
    name: 'Chicken', 
    chineseName: '鸡肉', 
    icon: 'chicken', 
    audio: 'chicken.mp3' 
  },
  { 
    id: 'spinach', 
    name: 'Spinach', 
    chineseName: '菠菜', 
    icon: 'leafy-green', 
    audio: 'spinach.mp3' 
  },
  { 
    id: 'broccoli', 
    name: 'Broccoli', 
    chineseName: '西兰花', 
    icon: 'leafy-green', 
    audio: 'broccoli.mp3' 
  },
  { 
    id: 'corn', 
    name: 'Corn', 
    chineseName: '玉米', 
    icon: 'corn', 
    audio: 'corn.mp3' 
  },
  { 
    id: 'basil', 
    name: 'Basil', 
    chineseName: '罗勒', 
    icon: 'leafy-green', 
    audio: 'basil.mp3' 
  },
  { 
    id: 'garlic', 
    name: 'Garlic', 
    chineseName: '大蒜', 
    icon: 'garlic', 
    audio: 'garlic.mp3' 
  }
];

const defaultLevels: Level[] = [
  {
    id: 1,
    name: 'Classic Duo',
    chineseName: '经典二重奏',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'basil', 'garlic'],
    unlocked: true
  },
  {
    id: 2,
    name: 'Pepperoni Party',
    chineseName: '辣香肠派对',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'basil', 'garlic', 'pepperoni', 'mushroom', 'olives'],
    unlocked: false
  },
  {
    id: 3,
    name: 'Veggie Delight',
    chineseName: '素食之乐',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'basil', 'garlic', 'pepperoni', 'mushroom', 'olives', 'pepper', 'onion', 'corn'],
    unlocked: false
  },
  {
    id: 4,
    name: 'Meat Lovers',
    chineseName: '肉食爱好者',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'basil', 'garlic', 'pepperoni', 'mushroom', 'olives', 'pepper', 'onion', 'corn', 'bacon', 'ham', 'chicken'],
    unlocked: false
  },
  {
    id: 5,
    name: 'The Works',
    chineseName: '至尊全餐',
    requiredIngredients: ['dough', 'sauce', 'cheese', 'pepperoni', 'mushroom', 'pepper', 'onion', 'pineapple', 'olives', 'bacon', 'ham', 'chicken', 'spinach', 'broccoli', 'corn', 'basil', 'garlic'],
    unlocked: false
  }
];

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levels, setLevels] = useState<Level[]>(defaultLevels);
  const [ingredients] = useState<Ingredient[]>(defaultIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['dough']);
  const [isCooking, setIsCooking] = useState(false);
  const [isCooked, setIsCooked] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isPizzaFailed, setIsPizzaFailed] = useState(false);

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
    // As requested, baking is always successful.
    setIsLevelComplete(true);
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
        isPizzaFailed,
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
