
import React from 'react';
import { GameProvider } from '@/context/GameContext';
import PizzaPrep from '@/components/PizzaPrep';
import IngredientsSelector from '@/components/IngredientsSelector';
import LevelSelector from '@/components/LevelSelector';
import LevelCompleteModal from '@/components/LevelCompleteModal';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  return (
    <GameProvider>
      <div className="min-h-screen bg-game-bg p-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">🍕 有趣的比萨烹饪</h1> {/* "Fun Pizza Cooking" in Chinese */}
          
          <LevelSelector />
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <PizzaPrep />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <IngredientsSelector />
          </div>
          
          <LevelCompleteModal />
        </div>
        <MusicPlayer />
      </div>
    </GameProvider>
  );
};

export default Index;
