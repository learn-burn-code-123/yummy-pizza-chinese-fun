
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

export type GameContextType = {
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
