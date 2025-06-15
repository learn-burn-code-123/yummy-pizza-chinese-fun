
import React from 'react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const LevelSelector: React.FC = () => {
  const { levels, currentLevel, selectLevel } = useGame();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-center">选择关卡</h2> {/* "Select Level" in Chinese */}
      <div className="flex justify-center flex-wrap gap-2">
        {levels.map((level) => (
          <Tooltip key={level.id}>
            <TooltipTrigger asChild>
              <Button
                onClick={() => selectLevel(level.id)}
                disabled={!level.unlocked}
                variant={currentLevel === level.id ? "default" : "outline"}
                className={`relative ${level.unlocked ? 'bg-level-btn hover:bg-level-btn/80' : 'bg-level-btn-locked'}`}
              >
                {level.id}
                {!level.unlocked && (
                  <Lock className="absolute -top-1 -right-1 w-4 h-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{level.chineseName}</p>
              <p>{level.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
