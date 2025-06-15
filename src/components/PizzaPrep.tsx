import React from 'react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/button';
import { Pizza, RotateCcw, Flame } from 'lucide-react';
import { playOvenSound } from '@/utils/audioHelper';
import { useDrop } from 'react-dnd';

const PizzaToppings = ({ selectedIngredients }: { selectedIngredients: string[] }) => (
  <>
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
                className="w-4 h-4 bg-yellow-50 rounded-full m-1 shadow-sm"
                style={{ 
                  transform: `translate(${Math.sin(i * Math.PI/3.5) * 45}px, ${Math.cos(i * Math.PI/3.5) * 45}px)` 
                }}
              ></div>
            ))}
          </div>
        )}
  </>
);

const PizzaPrep: React.FC = () => {
  const { 
    selectedIngredients,
    isCooking, 
    isCooked,
    isPizzaFailed,
    startCooking,
    resetPizza,
    addIngredient,
  } = useGame();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item: { id: string }) => addIngredient(item.id),
    canDrop: () => !isCooking && !isCooked,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleCook = () => {
    playOvenSound();
    startCooking();
  };

  const pizzaBase = (
    <div className={`relative w-full h-full rounded-full ${selectedIngredients.includes('dough') ? 'bg-pizza-crust' : 'bg-gray-200'} shadow-lg`}>
      <PizzaToppings selectedIngredients={selectedIngredients} />
      {isCooked && !isPizzaFailed && (
        <div className="absolute inset-0 bg-yellow-600 bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="text-5xl text-white">✓</div>
        </div>
      )}
      {isCooked && isPizzaFailed && (
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
          <div className="text-6xl text-red-500">✗</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="h-80 flex items-center justify-center">
        {isCooking ? (
          <div className="relative w-80 h-80 bg-oven-inside rounded-lg border-8 border-gray-700 p-4 flex items-center justify-center overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-4 bg-red-600 rounded-full blur-xl animate-pulse"></div>
            
            <div className="absolute bottom-0 inset-x-0 h-1/4 flex justify-center items-end space-x-2">
                <Flame className="text-orange-500 w-10 h-10 animate-pulse" style={{ animationDelay: '0s' }} />
                <Flame className="text-yellow-400 w-14 h-14 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <Flame className="text-red-600 w-12 h-12 animate-pulse" style={{ animationDelay: '0.1s' }} />
                <Flame className="text-yellow-400 w-14 h-14 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <Flame className="text-orange-500 w-10 h-10 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            
            <div className="absolute w-72 h-72 rounded-full bg-pizza-pan shadow-2xl"></div>
            <div className="relative w-64 h-64 animate-cooking">
              {pizzaBase}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 bg-red-600 rounded-full blur-xl animate-pulse"></div>
          </div>
        ) : (
          <div ref={drop} className={`relative w-64 h-64 rounded-full border-8 transition-colors duration-300 ${isOver && canDrop ? 'border-green-400' : 'border-yellow-800/20'} ${canDrop ? 'cursor-copy' : ''}`}>
            {pizzaBase}
            {isOver && canDrop && (
              <div className="absolute inset-0 bg-green-500/20 rounded-full flex items-center justify-center">
                <p className="text-white bg-black/50 px-4 py-1 rounded-md font-bold text-xl">放下!</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="h-16 mt-6">
        {isCooked && isPizzaFailed ? (
          <Button onClick={resetPizza} className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
            <RotateCcw />
            <span>再试一次</span> {/* Try Again */}
          </Button>
        ) : (
          <Button
            onClick={handleCook}
            disabled={selectedIngredients.length < 2 || isCooking || isCooked}
            className="bg-oven-brown hover:bg-oven-brown/80 text-white flex items-center gap-2"
          >
            <Pizza />
            <span>{isCooking ? '正在烤...' : isCooked ? '完成!' : '烤比萨饼'}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PizzaPrep;
