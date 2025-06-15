
import React from 'react';
import { useGame } from '@/context/GameContext';
import { Button } from '@/components/ui/button';
import { playSuccessSound } from '@/utils/audioHelper';

const LevelCompleteModal: React.FC = () => {
  const { isLevelComplete, completeLevel, currentLevel, levels } = useGame();

  // Play success sound when the modal appears
  React.useEffect(() => {
    if (isLevelComplete) {
      playSuccessSound();
    }
  }, [isLevelComplete]);

  if (!isLevelComplete) return null;

  const currentLevelData = levels.find(level => level.id === currentLevel);
  const isLastLevel = currentLevel === levels.length;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full m-4 animate-scale-in">
        <h2 className="text-2xl font-bold mb-4 text-center">🎉 恭喜!</h2> {/* "Congratulations!" in Chinese */}
        {isLastLevel ? (
          <p className="text-center mb-4">
            你已经完成了所有关卡！太棒了！<br /> {/* "You've completed all levels! Great job!" */}
            点击按钮重新开始游戏。 {/* "Click the button to start the game again." */}
          </p>
        ) : (
          <p className="text-center mb-4">
            你完成了{currentLevelData?.chineseName}!<br /> {/* "You completed [level name]!" in Chinese */}
            解锁了下一个级别! {/* "You unlocked the next level!" in Chinese */}
          </p>
        )}

        <div className="flex justify-center mt-4">
          <Button onClick={completeLevel} className="bg-green-500 hover:bg-green-600">
            {isLastLevel ? '重新开始' : '下一关'} {/* "Start Over" or "Next Level" in Chinese */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LevelCompleteModal;
