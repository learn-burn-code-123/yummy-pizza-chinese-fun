
import React from 'react';
import { GameProvider } from '@/context/GameContext';
import PizzaPrep from '@/components/PizzaPrep';
import IngredientsSelector from '@/components/IngredientsSelector';
import LevelSelector from '@/components/LevelSelector';
import LevelCompleteModal from '@/components/LevelCompleteModal';
import MusicPlayer from '@/components/MusicPlayer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Index = () => {
  return (
    <GameProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen bg-game-bg p-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">🍕 有趣的比萨烹饪</h1> {/* "Fun Pizza Cooking" in Chinese */}
            
            <LevelSelector />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <PizzaPrep />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <IngredientsSelector />
              </div>
            </div>
            
            <LevelCompleteModal />
          </div>
          <MusicPlayer />
        </div>
      </DndProvider>
    </GameProvider>
  );
};

export default Index;
