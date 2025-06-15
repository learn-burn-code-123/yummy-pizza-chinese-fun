
import React from 'react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/button';
import { Pizza } from 'lucide-react';
import { playOvenSound } from '@/utils/audioHelper';

const PizzaPrep: React.FC = () => {
  const { 
    selectedIngredients, 
    ingredients, 
    isCooking, 
    isCooked,
    startCooking 
  } = useGame();

  const handleCook = () => {
    playOvenSound();
    startCooking();
  };

  // Display the pizza with selected ingredients
  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-64 h-64 rounded-full ${selectedIngredients.includes('dough') ? 'bg-pizza-crust' : 'bg-gray-200'} ${isCooking ? 'animate-cooking' : ''} border-8 border-yellow-800/20 shadow-lg`}>
        {/* Base layer - sauce */}
        {selectedIngredients.includes('sauce') && (
          <div className="absolute top-2 left-2 right-2 bottom-2 bg-pizza-sauce rounded-full shadow-inner"></div>
        )}

        {/* Cheese layer */}
        {selectedIngredients.includes('cheese') && (
          <div className="absolute top-4 left-4 right-4 bottom-4 bg-pizza-cheese rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border-dashed border-2 border-yellow-600 opacity-50"></div>
          </div>
        )}

        {/* Toppings */}
        {selectedIngredients.includes('pepperoni') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={`pepperoni-${i}`} 
                className="w-8 h-8 rounded-full bg-red-700 m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/4) * 60}px, ${Math.cos(i * Math.PI/4) * 60}px)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('mushroom') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={`mushroom-${i}`} 
                className="w-7 h-5 bg-gray-200 rounded-t-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3) * 50}px, ${Math.cos(i * Math.PI/3) * 50}px)` 
                }}
              >
                <div className="w-full h-2 bg-gray-300 rounded-t-full"></div>
              </div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('pepper') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`pepper-${i}`} 
                className="w-6 h-3 bg-green-500 rounded-full m-1 transform rotate-45 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/2.5) * 55}px, ${Math.cos(i * Math.PI/2.5) * 55}px) rotate(${i * 36}deg)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('onion') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={`onion-${i}`} 
                className="w-5 h-5 bg-purple-100 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3.5) * 45}px, ${Math.cos(i * Math.PI/3.5) * 45}px)` 
                }}
              >
                <div className="w-4 h-4 bg-purple-200 rounded-full m-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* New ingredients visualization */}
        {selectedIngredients.includes('pineapple') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={`pineapple-${i}`} 
                className="w-6 h-6 bg-yellow-400 m-1 transform shadow-sm"
                style={{ 
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  transform: `translate(${Math.sin(i * Math.PI/3) * 50}px, ${Math.cos(i * Math.PI/3) * 50}px)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('olives') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={`olive-${i}`} 
                className="w-4 h-4 bg-gray-800 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/4.5) * 55}px, ${Math.cos(i * Math.PI/4.5) * 55}px)` 
                }}
              >
                <div className="w-2 h-2 bg-gray-600 rounded-full m-auto mt-1"></div>
              </div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('bacon') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={`bacon-${i}`} 
                className="w-8 h-3 bg-red-400 m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3) * 50}px, ${Math.cos(i * Math.PI/3) * 50}px) rotate(${i * 60}deg)` 
                }}
              >
                <div className="w-full h-1 bg-red-300 rounded-full"></div>
              </div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('ham') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`ham-${i}`} 
                className="w-7 h-5 bg-pink-300 rounded m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/2.5) * 50}px, ${Math.cos(i * Math.PI/2.5) * 50}px)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('chicken') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`chicken-${i}`} 
                className="w-7 h-5 bg-yellow-100 rounded-sm m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/2.5) * 45}px, ${Math.cos(i * Math.PI/2.5) * 45}px) rotate(${i * 72}deg)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('spinach') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={`spinach-${i}`} 
                className="w-5 h-3 bg-green-600 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3.5) * 55}px, ${Math.cos(i * Math.PI/3.5) * 55}px) rotate(${i * 51}deg)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('broccoli') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`broccoli-${i}`} 
                className="relative w-6 h-6 m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/2.5) * 50}px, ${Math.cos(i * Math.PI/2.5) * 50}px)` 
                }}
              >
                <div className="absolute bottom-0 w-2 h-3 bg-green-700 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute top-0 w-6 h-4 bg-green-500 rounded-full"></div>
              </div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('corn') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={`corn-${i}`} 
                className="w-3 h-3 bg-yellow-300 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/6) * 55}px, ${Math.cos(i * Math.PI/6) * 55}px)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('basil') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={`basil-${i}`} 
                className="w-6 h-4 bg-green-500 rounded-sm m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3) * 50}px, ${Math.cos(i * Math.PI/3) * 50}px) rotate(${i * 60}deg)` 
                }}
              >
                <div className="w-full h-1 bg-green-600 rounded-full"></div>
              </div>
            ))}
          </div>
        )}

        {selectedIngredients.includes('garlic') && (
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={`garlic-${i}`} 
                className="w-4 h-4 bg-gray-200 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3.5) * 45}px, ${Math.cos(i * Math.PI/3.5) * 45}px)` 
                }}
              ></div>
            ))}
          </div>
        )}

        {isCooked && (
          <div className="absolute inset-0 bg-yellow-600 bg-opacity-10 rounded-full flex items-center justify-center">
            <div className="text-4xl">✓</div>
          </div>
        )}
      </div>

      {/* Cooking button */}
      <Button
        onClick={handleCook}
        disabled={!selectedIngredients.includes('dough') || isCooking || isCooked}
        className="mt-6 bg-oven-brown hover:bg-oven-brown/80 text-white flex items-center gap-2"
      >
        <Pizza />
        <span>烤比萨饼</span> {/* "Bake Pizza" in Chinese */}
      </Button>
    </div>
  );
};

export default PizzaPrep;
