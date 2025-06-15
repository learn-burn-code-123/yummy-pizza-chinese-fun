
import React, { createContext, useContext, ReactNode } from 'react';
import { GameContextType } from '@/types/game';
import { useGameLogic } from '@/hooks/useGameLogic';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const gameLogic = useGameLogic();

  return (
    <GameContext.Provider value={gameLogic}>
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
