
import { Ingredient, Level } from '@/types/game';

export const defaultIngredients: Ingredient[] = [
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

export const defaultLevels: Level[] = [
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
